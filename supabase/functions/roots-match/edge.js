import { deckFor, prepare, applyMove } from './rules.js';

const origin = 'https://g772s79vy7-jpg.github.io';
const cors = {
  'Access-Control-Allow-Origin': origin,
  'Access-Control-Allow-Headers': 'authorization, apikey, content-type, x-client-info',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};
const url = Deno.env.get('SUPABASE_URL');
const service = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
const answer = (body, status=200) => Response.json(body,{status,headers:cors});
async function rpc(name, body) {
  const response = await fetch(url+'/rest/v1/rpc/'+name,{
    method:'POST', headers:{apikey:service,authorization:'Bearer '+service,'content-type':'application/json'},
    body:JSON.stringify(body),
  });
  if (!response.ok) throw new Error('database');
  return response.json();
}

Deno.serve(async request => {
  if (request.method==='OPTIONS') return new Response(null,{headers:cors});
  if (request.method!=='POST') return answer({error:'POST only'},405);
  try {
    const authorization = request.headers.get('authorization');
    if (!authorization?.startsWith('Bearer ')) return answer({error:'接続してください。'},401);
    const auth = await fetch(url+'/auth/v1/user',{headers:{apikey:service,authorization}});
    if (!auth.ok) return answer({error:'接続し直してください。'},401);
    const {id:user} = await auth.json();
    const {room, action, revision} = await request.json();
    if (typeof room!=='string'||!/^([0-9a-f]{8}-)([0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(room)) return answer({error:'部屋が無効です。'},400);
    const args={p_room:room,p_user:user};
    const match=await rpc('roots_match_load',args);
    if (!match) return answer({error:'2人がそろった対戦部屋が必要です。'},404);
    const seat=match.host===user?'host':'guest';
    const other=seat==='host'?'guest':'host';
    let state=match.state??{host:null,guest:null,turn:'host',round:1,winner:null,logs:[]};
    let version=match.revision;
    if(action){
      if(version!==revision) return answer({error:'盤面が更新されました。もう一度お試しください。'},409);
      try {
        if(action.kind==='ready'){
          if(state[seat]) throw new Error('デッキは選択済みです。');
          state[seat]=prepare(deckFor(action.root),seat==='host');
        } else {
          if(!state.host||!state.guest||state.winner) throw new Error('対戦中のみ操作できます。');
          state=applyMove(state,seat,action);
        }
      } catch(e) {return answer({error:e.message},400);}
      if(!await rpc('roots_match_save',{...args,p_revision:version,p_state:state})) return answer({error:'盤面が更新されました。もう一度お試しください。'},409);
      version++;
    }
    const ready=!!(state.host&&state.guest);
    function view(player,own) {
      if(!player)return null;
      return {hp:player.hp,cost:player.cost,capacity:player.capacity,b:player.b,
        h:own?player.h:Array(player.h.length).fill(null),d:Array(player.d.length).fill(null),
        trash:Array(player.trash.length).fill(null),pending:own&&player.pending};
    }
    return answer({version,ready,p:view(state[seat],true),c:view(state[other],false),
      turn:state.turn===seat?'p':'c',round:state.round,over:!!state.winner,
      won:state.winner===seat,logs:state.logs});
  } catch { return answer({error:'対戦サーバーに接続できませんでした。'},500); }
});
