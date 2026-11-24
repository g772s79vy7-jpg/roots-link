const R=[['red','🔴十二市'],['blue','🔵音海楽団'],['green','🟢虹色学園'],['white','⚪天体衆'],['black','⚫怨墓侘屋']];
const N={
red:['紅花札 虎威虎威','鼠花火 火鉢バチ','龍侍 龍ノ介','大岩力士 牛轟丸','蛇忍 影縫','疾風騎馬 馬之助','餅月巫女 白兎','猿楽役者 猿之助','狛犬番人 阿吽','猪突武者 猪之助','狐面師コンコン','雷太鼓鳴門','鶴舞剣士千鶴','河童相撲皿之助','天狗山伏烈風','化け猫芸者玉三郎','鬼瓦大工鉄造','竹取姫かぐや','唐傘お化けパラ吉','百鬼夜行総大将百々目鬼'],
blue:['ドルフィン・ド','レイニー・レ','ミーナ・ミ','ファンファーレ・ファ','ソプラノ・ソ','ラッパー・ラ','シーラ・シ','巨鯨指揮者フォルテ','海月奏者ピアノ','深海の歌姫クレッシェンド','タクト・タコット','海亀楽長アンダンテ','低音魚バッソ','真珠の歌姫アリア','音叉海月チューナ','太鼓鮫ドンドン','珊瑚琴の奏者ハープ','逆再生の巻貝リバース','深海蓄音機グラモ','海底交響王シンフォニー'],
green:['桜木サクラ','向日葵先生','コスモス先輩','菫野スミレ','薔薇園ローズ','若葉の芽衣','樫木ゴウ','植物博士クスノキ','藤棚のフジ','大樹の校長ケヤキ','紅葉カエデ','椿山ツバキ','紫陽花アジサイ','たんぽぽポポ','木蓮モクレン','竹林先生バンブー','朝顔アサミ','苔庭コケ丸','花壇の用務員ハナジイ','世界樹の図書館司書リンデン'],
white:['射手座の騎士アルタイル','獅子座の公爵レオニス','蠍座の暗殺伯爵スコルピオ','水瓶座の女王アクエリア','牡羊座の戦将アリエス','牡牛座の大公タウラス','双子座の双子王子ジェミニ','蟹座の守護騎士キャンサー','乙女座の聖女ヴァルゴ','山羊座の大賢者カプリコーン','天秤座の裁判官リブラ','魚座の姫君ピスケス','乙女座の侍女長ディーヴァ','蠍座の毒薬博士アンタレス','牡牛座の近衛隊長ブル','双子座の宮廷道化師ジェミ','水瓶座の大司祭ウラノス','蟹座の王宮料理長クラブ','山羊座の大公爵サターン','十二星座の皇帝ゾディアック'],
black:['びっくり箱のボックス','ブリキ兵士アイアン','吸血ぬいぐるみドラキュラベア','操り人形マリオネット','継ぎ接ぎ男フランケン','包帯人形ミイラちゃん','狼男の着ぐるみウルフ','錆びたゼンマイ兵長','呪いのテディローズ','道化師ピエロ・ノワール','ゼンマイ兎ラビット','呪われたオルゴールメロディ','首なし騎士ホロウ','からくり蜘蛛スパイダー','ぬいぐるみ狼グルル','毒針人形ピノ','呪いの人形館長ドールマン','玩具列車トレイン・ゴースト','片目のピエロボロ','おもちゃ墓場の番人グレイブ']};
const F={red:[['花火師多摩屋',0,1],['龍角武将龍轟丸',2,3],['九尾蛇忍白影',4,10],['月鶴姫千代',6,12],['百鬼天狗猫魔王',15,14]],blue:[['蒼海歌姫ディーヴァ',0,2],['深海大指揮者グランフォルテ',7,11],['響震海獣オクトシャーク',10,5],['幻奏水母クリスタリア',8,14],['海底交響皇帝オーケストラ',19,16]],green:[['桜陽の女王サクラヒメ',0,1],['棘華生徒会長ロザリア',4,14],['千年竹林王バンブロード',15,9],['星花の大先輩コスモリア',2,12],['虹樹大賢者ユグドラ',19,7]],white:[['獅弓星皇レオタリウス',0,1],['双星王ジェミニオン',6,15],['星毒大公スコルピア',2,13],['星海女帝アクアピス',3,11],['天象神帝ゾディアーク',19,9]],black:[['吸血箱魔王ブラッドボックス',0,2],['鋼鉄怪人アイアンフランケン',1,4],['狼操傀儡ウルフマリオ',3,6],['呪刻ミイラ兎クロノラビット',10,5],['玩具墓王グレイヴドール',19,16]]};
const S={red:['鬼火一閃','武士の覚悟','破魔の太刀','疾風の陣','百鬼夜行'],blue:['潮騒の旋律','深海の調律','逆再生の音色','真珠の子守歌','大海の交響曲'],green:['芽吹きの合図','急成長の魔法陣','花咲く祝福','放課後の園芸','世界樹の恵み'],white:['星の導き','月光の癒やし','星座の結界','天体の共鳴','流星の祝福'],black:['呪いの指先','玩具の葬列','破滅の糸','呪われた契約','墓場の呼び声']};
const EQN=['連結の護符','星屑の腕輪','深海の羅針盤','花守りの冠','怨念の歯車'];
let C=[];const edges=['凸','凹','無'];
for(const [r,label] of R){let root=label.slice(2);
N[r].forEach((n,i)=>{let k=r==='blue'&&i%5===0?'巡回':r==='green'&&i%4===0?'成長':r==='white'&&i%4===0?'星導':r==='black'&&i%4===0?'怨念':r==='red'&&i%6===0?'速攻':'';let e=Array.from({length:4},(_,j)=>({s:((i+j*2)%5===0?'無':edges[(i+j)%2]),c:1+((i+j)%2)}));C.push({id:r+'p'+i,n,r,t:'piece',a:2+i%4,h:2+(i*3)%5,c:1+i%3,k,d:'各ルーツの個性を持つピース。',e})});
for(let i=0;i<50;i++){let k=r==='blue'&&i%9===0?'巡回':r==='green'&&i%8===0?'成長':r==='white'&&i%10===0?'星導':r==='black'&&i%7===0?'怨念':'';C.push({id:r+'x'+i,n:['若き','新米','見習い','古参','伝説の'][i%5]+root+' '+['守り手','奏者','学徒','騎士','人形'][i%5]+' '+(i+1),r,t:'piece',a:1+i%5,h:2+(i*2)%5,c:1+i%3,k,d:'生成カード。テスト用の仮ステータス。',e:Array.from({length:4},(_,j)=>({s:((i+j)%6===0?'無':edges[(i+j)%2]),c:1+((i+j)%2)}))})}
F[r].forEach(([n,a,b],i)=>C.push({id:r+'f'+i,n,r,t:'fusion',a:6+i,h:7+i,c:0,cc:1+i%2,k:'融合',d:'指定された同ルーツの融合素材2体が必要。接続コストのみ。',m:[r+'p'+a,r+'p'+b]}));
for(let i=0;i<20;i++)C.push({id:r+'e'+i,n:EQN[i%5]+' '+(i+1),r,t:'equipment',a:i%3===0?2:1,h:i%3===1?2:0,c:1+i%2,e:{s:i%2===0?'凸':'凹',c:1+i%2},k:'装備',d:'対象ピースに装備。攻撃力/HPを補正。装備中は接続・融合不可。'});
S[r].forEach((n,i)=>C.push({id:r+'s'+i,n,r,t:'spell',a:0,h:0,c:0,e:{s:i%2===0?'凸':'凹',c:1+i%2},k:'詠唱',d:['相手ピースに2ダメージ','自分リーダーを2回復','味方ピースを+1/+1強化','このターン召喚コスト+1','相手リーダーに2ダメージ'][i],ef:i}));
}

const overrides = {
  redp0:{a:3,h:3,c:2},
  redp1:{a:3,h:8,c:4},
  redf0:{a:8,h:10,cc:5},
  whitep7:{k:'盾'},
  greenp1:{k:'活性',a:2,h:3},
};
for(const card of C) Object.assign(card,overrides[card.id]);

export function validateDeck(ids) {
  if (!Array.isArray(ids) || ids.length!==30) throw new Error('デッキを30枚にしてください。');
  const counts=new Map();
  let root;
  for (const id of ids) {
    const card=C.find(entry=>entry.id===id);
    if (!card) throw new Error('使用できないカードが含まれています。');
    root ??= card.r;
    if (card.r!==root) throw new Error('同じルーツのカードだけを使えます。');
    const count=(counts.get(card.n)??0)+1;
    if(count>3) throw new Error('同名カードは3枚までです。');
    counts.set(card.n,count);
  }
  if(!ids.some(id=>C.find(card=>card.id===id).t==='piece')) throw new Error('デッキにはピースが必要です。');
  return ids;
}

export function deckFor(root) {
  if (!R.some(([id])=>id===root)) throw new Error('ルーツを選んでください。');
  const ids=[0,1,2,3,4,5,6,7,8,9,10,11].map(i=>root+'p'+i);
  return [...ids,...ids,...[0,2,4].map(i=>root+'s'+i),root+'f0',root+'e0',root+'x0'];
}
export function prepare(deck,host) {
 const d=[...deck];
 for(let i=d.length-1;i>0;i--){
   const j=Math.floor(Math.random()*(i+1));
   [d[i],d[j]]=[d[j],d[i]];
 }
 return {hp:20,h:d.splice(0,4),d,b:[],trash:[],cost:host?1:0,capacity:host?1:0,pending:false};
}

export function applyMove(state,seat,action){
 const opponent=seat==='host'?'guest':'host';
 if(state.turn!==seat) throw new Error('相手のターンです。');
 const G={p:state[seat],c:state[opponent],round:state.round};
 const index=(n)=>Number.isInteger(n)&&n>=0&&n<9?n:-1;
 let handSel=index(action.hand),unitSel=index(action.unit),secondSel=index(action.second),targetSel=index(action.target);
 const log=(s)=>{state.logs.unshift(s);state.logs.length=Math.min(12,state.logs.length);};
 const alert=(s)=>{throw new Error(s);};
 const renderGame=()=>{};
 const prompt=()=>1+(prompt.calls++ ? secondSel : unitSel);
 prompt.calls=0;
 const draw=(p)=>{
   if(!p.d.length){state.winner=p===G.p?opponent:seat;G.over=true;return [];}
   const id=p.d.shift();
   if(p.h.length>=9)p.trash.push(id);else p.h.push(id);
   return [id];
 };
 const patrol=(p)=>{p.pending=true;};
 const winCheck=()=>{if(G.c.hp<=0)state.winner=seat;if(G.p.hp<=0)state.winner=opponent;};
function makeUnit(c){return {n:c.n,id:c.id,r:c.r,a:c.a,hp:c.h,max:c.h,k:c.k||'',ready:c.k==='速攻',shield:c.k==='盾',edges:c.e?c.e.map(x=>({...x,used:false})):[],equip:null,mats:null,entered:G.round,growth:0,attacked:false}}
function boardSlots(p){return p.b.reduce((n,u)=>n+(u.mats?2:1),0)}
function spendHand(){let id=G.p.h.splice(handSel,1)[0];handSel=-1;return C.find(x=>x.id===id)}
function summon(){let p=G.p,c=C.find(x=>x.id===p.h[handSel]);if(!c||c.t!=='piece')return;if(boardSlots(p)>=3)return alert('場は最大3枠。');if(p.cost<c.c)return alert('召喚コスト不足。');p.cost-=c.c;c=spendHand();p.b.push(makeUnit(c));log(c.n+'を召喚！');if(c.k==='巡回'){let d=draw(p);if(!G.over)patrol(p,d)}renderGame()}
function fuse(){let p=G.p,c=C.find(x=>x.id===p.h[handSel]);if(!c||c.t!=='fusion')return;if(p.cost<c.cc)return alert('接続コスト不足。');if(p.b.length<2)return alert('融合素材2体が必要。');let a=Number(prompt('融合素材1の場番号（1〜'+p.b.length+'）','1'))-1,b=Number(prompt('融合素材2の場番号','2'))-1;if(a===b||!p.b[a]||!p.b[b])return;let u=p.b[a],v=p.b[b];if(u.mats||v.mats||u.equip||v.equip)return alert('装備中のピースは融合できません。');if(!c.m||u.id===v.id||![u.id,v.id].every(id=>c.m.includes(id)))return alert('この融合カードの指定素材ではありません。');p.cost-=c.cc;let indices=[a,b].sort((x,y)=>y-x);for(let i of indices){let m=p.b.splice(i,1)[0];toTrash(p,m,'融合素材')}let f=spendHand();let x=makeUnit(f);x.ready=false;p.b.push(x);log(u.n+'＋'+v.n+' → '+f.n+'！接続コスト'+f.cc+'を使用。');renderGame()}
function edgePair(u,v,allowStar=true){for(let i=0;i<4;i++)for(let j=(i+2)%4, stop=j+1;j<stop;j++){let a=u.edges[i],b=v.edges[j];if(a&&!a.used&&b&&!b.used&&a.s!=='無'&&b.s!=='無'&&a.s!==b.s)return {i,j,c:a.s==='凸'?a.c:b.c}}if(allowStar&&(u.k==='星導'||v.k==='星導'))return {i:-1,j:-1,c:1,star:true};return null}
function connect(){let p=G.p,u=p.b[unitSel],v=p.b[secondSel];if(!u||!v||u===v)return;if(u.mats||v.mats||u.equip||v.equip)return alert('装備中のピースは連結できません。');let e=edgePair(u,v);if(!e)return alert('接続辺が合いません（星導があれば無視可能）。');if(p.cost<e.c)return alert('接続コスト不足。');p.cost-=e.c;if(!e.star){u.edges[e.i].used=true;v.edges[e.j].used=true}let mats=[];for(let x of [u,v]){if(x.mats)mats.push(...x.mats);else mats.push({n:x.n,hp:x.hp,max:x.max,a:x.a,id:x.id,k:x.k})}let max=mats.reduce((s,x)=>s+x.max,0),hp=mats.reduce((s,x)=>s+x.hp,0);let x={n:u.n+'＋'+v.n+' LINK',id:'link',r:u.r,a:u.a+v.a,hp,max,k:'連結',ready:u.ready&&v.ready,shield:u.shield||v.shield,edges:[],equip:null,mats:mats,entered:G.round,attacked:false};for(let i of [unitSel,secondSel].sort((a,b)=>b-a))p.b.splice(i,1);p.b.push(x);log(u.n+'と'+v.n+'が連結！'+(e.star?'星導で辺条件を無視。':'接続辺を使用。')+'攻撃/HP合算。');unitSel=secondSel=-1;renderGame()}
function toTrash(p,u,why){if(u.mats){u.mats.forEach(m=>{p.trash.push(m.id||'linked-material');if(m.k==='怨念')resent(p,m.n)})}else{p.trash.push(u.id);if(u.k==='怨念')resent(p,u.n)}if(u.equip)p.trash.push(u.equip.id);log(u.n+'はトラッシュへ（'+why+'）。');}
function resent(p,n){p.b.forEach(u=>{if(u.k==='怨念'&&u.id!=='link'){u.a++;log(u.n+'の怨念！攻撃力+1。')}})}
function damageUnit(p,i,dmg){let u=p.b[i];if(!u)return;if(u.mats){let left=dmg;u.mats.sort((a,b)=>a.hp-b.hp);while(left>0&&u.mats.length){let m=u.mats[0],take=Math.min(left,m.hp);m.hp-=take;left-=take;if(m.hp<=0){p.trash.push(m.id||'material');if(m.k==='怨念')resent(p,m.n);log(m.n+'が連結体から脱落しトラッシュへ。');u.mats.shift()}}u.hp=u.mats.reduce((s,m)=>s+m.hp,0);u.max=u.mats.reduce((s,m)=>s+m.max,0);if(!u.mats.length){p.b.splice(i,1);log(u.n+'は消滅！')}else{u.a=u.mats.reduce((s,m)=>s+m.a,0);log(u.n+'に'+dmg+'ダメージ（残HP'+u.hp+'）。')}}else{u.hp-=dmg;log(u.n+'に'+dmg+'ダメージ！');if(u.hp<=0){p.b.splice(i,1);toTrash(p,u,'破壊')}}}
function attack(){let p=G.p,c=G.c,u=p.b[unitSel];if(!u||!u.ready||targetSel>=c.b.length)return;let shields=c.b.map((x,i)=>x.shield?i:-1).filter(i=>i>=0);let ti=targetSel;if(shields.length&& (ti<0||!shields.includes(ti)))return alert('相手に盾がいるため盾を選んでください。');if(ti>=0&&c.b[ti])damageUnit(c,ti,u.a);else{c.hp-=u.a;log(u.n+'が相手リーダーに'+u.a+'ダメージ！')}u.ready=false;u.attacked=true;unitSel=targetSel=-1;winCheck();renderGame()}
function equip(){let p=G.p,c=C.find(x=>x.id===p.h[handSel]),u=p.b[unitSel];if(c?.t!=='equipment'||!u||u.mats||u.equip)return alert('装備できるのは装備なしの単独ピースのみ。');let ep=u.edges.findIndex(e=>!e.used&&e.s!=='無'&&e.s!==c.e.s);if(ep<0)return alert('装備カードと凸凹が合う未使用辺がありません。');const cost=c.e.s==='凸'?c.e.c:u.edges[ep].c;if(p.cost<cost)return alert('接続コスト不足。');p.cost-=cost;u.edges[ep].used=true;u.equip={id:c.id,n:c.n,a:c.a,h:c.h};u.a+=c.a;u.hp+=c.h;u.max+=c.h;spendHand();log(c.n+'を'+u.n+'に装備。接続コスト'+cost+'。');renderGame()}
function detach(){let p=G.p,u=p.b[unitSel];if(!u?.equip)return;let e=u.equip;u.a-=e.a;u.hp=Math.min(u.hp,u.max-e.h);u.max-=e.h;u.equip=null;p.trash.push(e.id);log(e.n+'を外してトラッシュへ。');renderGame()}
function spell(){let p=G.p,c=C.find(x=>x.id===p.h[handSel]),u=p.b[unitSel];if(c?.t!=='spell'||!u)return;let ep=u.edges.findIndex(e=>!e.used&&e.s!=='無'&&e.s!==c.e.s);if(ep<0)return alert('詠唱と凸凹が合う辺がありません。');const cost=c.e.s==='凸'?c.e.c:u.edges[ep].c;if(p.cost<cost)return alert('接続コスト不足。');p.cost-=cost;let f=spendHand();if(f.ef===0){if(!G.c.b[targetSel])return alert('相手のピースを選んでください。');damageUnit(G.c,targetSel,2)}else if(f.ef===1)p.hp=Math.min(20,p.hp+2);else if(f.ef===2){u.a++;u.hp++;u.max++}else if(f.ef===3)p.cost=Math.min(5,p.cost+1);else G.c.hp-=2;log(f.n+'を使用（接続コスト'+cost+'）。詠唱使用辺は再利用可能。');winCheck();renderGame()}
function grow(p){let arr=p.b.filter(u=>u.k==='成長'&&!u.mats);for(let u of arr){if(p.cost>=1){p.cost--;u.a++;u.hp++;u.max++;u.growth++;log(u.n+'が成長！攻撃/最大HP+1（累計'+u.growth+'）。')}}}
 const before=JSON.stringify(state);
 if(G.p.pending&&action.kind!=='patrol') alert('巡回で戻す手札を選んでください。');
 switch(action.kind){
  case 'patrol':
    if(!G.p.pending||!G.p.h[handSel])alert('戻す手札を選んでください。');
    G.p.d.push(G.p.h.splice(handSel,1)[0]);
    G.p.pending=false;
    log('巡回で手札を1枚戻しました。');
    break;
  case 'summon':{
    const id=G.p.h[handSel];
    summon();
    if(id==='greenp1')G.p.cost=Math.min(5,G.p.cost+1);
    if(id==='redp1'&&G.p.h.length<9){
      const candidates=G.p.d.flatMap((card,i)=>C.find(x=>x.id===card)?.t==='piece'?[i]:[]);
      if(candidates.length)G.p.h.push(G.p.d.splice(candidates[Math.floor(Math.random()*candidates.length)],1)[0]);
    }
    break;
  }
  case 'fuse': fuse(); break;
  case 'connect': connect(); break;
  case 'attack':{
    const tamaya=G.p.b[unitSel]?.id==='redf0';
    const defender=G.c.b[targetSel];
    const changes=G.c.trash.length;
    attack();
    if(tamaya&&defender&&G.c.trash.length>changes){
      G.c.hp-=5;
      for(let i=G.c.b.length-1;i>=0;i--)damageUnit(G.c,i,5);
      winCheck();
    }
    break;
  }
  case 'equip': equip(); break;
  case 'spell': spell(); break;
  case 'detach': detach(); break;
  case 'end':
    grow(G.p);
    G.p.cost=0;
    G.c.capacity=Math.min(5,G.c.capacity+1);
    G.c.cost=G.c.capacity;
    for(const unit of G.c.b){unit.ready=true;unit.attacked=false;}
    state.turn=opponent;
    if(opponent==='host')state.round++;
    draw(G.c);
    break;
  default: alert('操作が無効です。');
 }
 if(JSON.stringify(state)===before)alert('その操作はできません。');
 return state;
}
