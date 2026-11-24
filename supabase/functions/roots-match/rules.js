const R=[['red','🔴十二市'],['blue','🔵音海楽団'],['green','🟢虹色学園'],['white','⚪天体衆'],['black','⚫怨墓侘屋']];
const N={
red:['紅花札 虎威虎威','鼠花火 火鉢バチ','龍侍 龍ノ介','大岩力士 牛轟丸','蛇忍 影縫','疾風騎馬 馬之助','餅月巫女 白兎','猿楽役者 猿之助','狛犬番人 阿吽','猪突武者 猪之助','狐面師コンコン','雷太鼓鳴門','鶴舞剣士千鶴','河童相撲皿之助','天狗山伏烈風','化け猫芸者玉三郎','鬼瓦大工鉄造','竹取姫かぐや','唐傘お化けパラ吉','百鬼夜行総大将百々目鬼'],
blue:['ドルフィン・ド','レイニー・レ','ミーナ・ミ','ファンファーレ・ファ','ソプラノ・ソ','ラッパー・ラ','シーラ・シ','巨鯨指揮者フォルテ','海月奏者ピアノ','深海の歌姫クレッシェンド','タクト・タコット','海亀楽長アンダンテ','低音魚バッソ','真珠の歌姫アリア','音叉海月チューナ','太鼓鮫ドンドン','珊瑚琴の奏者ハープ','逆再生の巻貝リバース','深海蓄音機グラモ','海底交響王シンフォニー'],
green:['桜木サクラ','向日葵先生','コスモス先輩','菫野スミレ','薔薇園ローズ','若葉の芽衣','樫木ゴウ','植物博士クスノキ','藤棚のフジ','大樹の校長ケヤキ','紅葉カエデ','椿山ツバキ','紫陽花アジサイ','たんぽぽポポ','木蓮モクレン','竹林先生バンブー','朝顔アサミ','苔庭コケ丸','花壇の用務員ハナジイ','世界樹の図書館司書リンデン'],
white:['射手座の騎士アルタイル','獅子座の公爵レオニス','蠍座の暗殺伯爵スコルピオ','水瓶座の女王アクエリア','牡羊座の戦将アリエス','牡牛座の大公タウラス','双子座の双子王子ジェミニ','蟹座の守護騎士キャンサー','乙女座の聖女ヴァルゴ','山羊座の大賢者カプリコーン','天秤座の裁判官リブラ','魚座の姫君ピスケス','乙女座の侍女長ディーヴァ','蠍座の毒薬博士アンタレス','牡牛座の近衛隊長ブル','双子座の宮廷道化師ジェミ','水瓶座の大司祭ウラノス','蟹座の王宮料理長クラブ','山羊座の大公爵サターン','十二星座の皇帝ゾディアック'],
black:['びっくり箱のボックス','ブリキ兵士アイアン','吸血ぬいぐるみドラキュラベア','操り人形マリオネット','継ぎ接ぎ男フランケン','包帯人形ミイラちゃん','狼男の着ぐるみウルフ','錆びたゼンマイ兵長','呪いのテディローズ','道化師ピエロ・ノワール','ゼンマイ兎ラビット','呪われたオルゴールメロディ','首なし騎士ホロウ','からくり蜘蛛スパイダー','ぬいぐるみ狼グルル','毒針人形ピノ','呪いの人形館長ドールマン','玩具列車トレイン・ゴースト','片目のピエロボロ','おもちゃ墓場の番人グレイブ']};
const F={red:[['花火師多摩屋',0,1],['龍角武将龍轟丸',2,3],['九尾蛇忍白影',4,10],['月鶴姫千代',6,12],['百鬼天狗猫魔王',15,14]],blue:[['蒼海歌姫ディーヴァ',0,2],['深海大指揮者グランフォルテ',7,11],['響震海獣オクトシャーク',10,5],['幻奏水母クリスタリア',8,14],['海底交響皇帝オーケストラ',19,16]],green:[['桜陽の女王サクラヒメ',0,1],['棘華生徒会長ロザリア',4,14],['千年竹林王バンブロード',15,9],['星花の大先輩コスモリア',2,12],['虹樹大賢者ユグドラ',19,7]],white:[['獅弓星皇レオタリウス',0,1],['双星王ジェミニオン',6,15],['星毒大公スコルピア',2,13],['星海女帝アクアピス',3,11],['天象神帝ゾディアーク',19,9]],black:[['吸血箱魔王ブラッドボックス',0,2],['鋼鉄怪人アイアンフランケン',1,4],['狼操傀儡ウルフマリオ',3,6],['呪刻ミイラ兎クロノラビット',10,5],['玩具墓王グレイヴドール',19,16]]};
const S={red:['鬼火一閃','武士の覚悟','破魔の太刀','疾風の陣','百鬼夜行'],blue:['潮騒の旋律','深海の調律','逆再生の音色','真珠の子守歌','大海の交響曲'],green:['芽吹きの合図','急成長の魔法陣','花咲く祝福','放課後の園芸','世界樹の恵み'],white:['星の導き','月光の癒やし','星座の結界','天体の共鳴','流星の祝福'],black:['呪いの指先','玩具の葬列','破滅の糸','呪われた契約','墓場の呼び声']};
const pieceNames={
 red:[['夜桜','朝霧','夕凪','初雪','朱月','風花','宵霞','花曇','遠雷','残照'],['火消し','太刀持ち','手裏剣師','祭り囃子','面打ち']],
 blue:[['珊瑚礁の','海峡の','真珠浜の','海底洞の','氷湾の','深海港の','波間の','藍の入り江の','海流の','夜潮の'],['フルート吹き','打楽器奏者','合唱隊員','弦楽奏者','調律師']],
 green:[['山吹組の','銀杏組の','桜草組の','白樺組の','鈴蘭組の','柊組の','山茶花組の','蒲公英組の','藤組の','橘組の'],['園芸委員','花壇当番','温室係','生徒会書記','標本部員']],
 white:[['北極星の','流星群の','月食の','黄道の','天の川の','明けの明星の','星雲の','新月の','極光の','白夜の'],['衛兵','修道士','従騎士','航海士','観測官']],
 black:[['空玩具箱の','屋根裏の','倉庫裏の','閉店後の','雨戸の奥の','からくり棚の','地下室の','紙貼り小屋の','見本棚の','忘れ物箱の'],['おばけ独楽','ブリキ狼','針鼠人形','おどけ骸骨','包帯うさぎ']],
};
const equipmentNames={
 red:[['朱塗り','漆黒','銀糸','緋色'],['火鉢','陣羽織','鉢巻','祭鈴','小太刀']],
 blue:[['珊瑚の','真珠の','流氷の','深海の'],['音叉','指揮棒','調律器','楽譜入れ','小鐘']],
 green:[['桜組の','柊組の','藤組の','橘組の'],['剪定ばさみ','花冠','じょうろ','手帳','標本箱']],
 white:[['月光の','流星の','彗星の','黄道の'],['小盾','紋章旗','星図','杖','胸当て']],
 black:[['錆びた','曲がった','煤けた','ひび割れた'],['歯車','ゼンマイ','鉄仮面','鈴','鎖']],
};
const profiles=[
 [1,1,3,4],[1,2,2,2],[1,0,4,4],[2,2,4,3],[2,3,3,2],
 [2,1,5,4],[3,3,5,3],[3,4,4,2],[3,2,6,4],[4,4,7,2],
];
function ports(index,count) {
  const result=Array.from({length:4},()=>({s:'無',c:0}));
  const order=[[0,2,1,3],[1,3,2,0],[2,0,3,1],[3,1,0,2]][index%4];
  for(let step=0;step<count;step++){
    const s=(step+Math.floor(index/4))%2===0?'凸':'凹';
    result[order[step]]={s,c:s==='凸'&&(index+step)%7===0?2:s==='凸'?1:0};
  }
  return result;
}
function piece(root,id,name,index,keyword) {
  const [c,attack,health,count]=profiles[index%profiles.length];
  const guard=keyword==='盾';
  const aggressive=root==='red'&&!keyword&&count<4;
  const support=keyword==='巡回'||keyword==='成長'||keyword==='活性';
  return {id,n:name,r:root,t:'piece',c,k:keyword,a:Math.max(1,attack+(aggressive?1:0)-(support||guard?1:0)),
    h:health+(guard||(root==='black'&&(keyword==='怨念'||c<=2))?1:0)-(aggressive||support?1:0),e:ports(index,count),d:''};
}
const C=[];
for(const [r] of R){
  const key={red:'速攻',blue:'巡回',green:'成長',white:'星導',black:'怨念'}[r];
  N[r].forEach((name,i)=>{
    const keyword=(r==='white'&&[7,14].includes(i))?'盾':i%5===0?key:'';
    C.push(piece(r,r+'p'+i,name,i,keyword));
  });
  const [prefixes,roles]=pieceNames[r];
  for(let i=0;i<50;i++){
    const keyword=r==='white'&&i%10===4?'盾':i%10===2||i%10===6?key:'';
    const name=prefixes[Math.floor(i/5)]+roles[i%5];
    C.push(piece(r,r+'x'+i,name,i+Math.floor(i/5),keyword));
  }
  F[r].forEach(([n,a,b],i)=>C.push({id:r+'f'+i,n,r,t:'fusion',a:5+i,h:7+i,c:0,cc:2+i%3,k:'一体化リンク',m:[r+'p'+a,r+'p'+b]}));
  const [descriptors,gear]=equipmentNames[r];
  for(let i=0;i<20;i++){
    C.push({id:r+'e'+i,n:descriptors[Math.floor(i/5)]+gear[i%5],r,t:'equipment',a:i%3===0?2:1,
      h:i%3===1?2:0,e:{s:i%2===0?'凸':'凹',c:i%2===0?1:0},k:'装備'});
  }
  S[r].forEach((n,i)=>C.push({id:r+'s'+i,n,r,t:'spell',e:{s:i%2===0?'凸':'凹',c:i%2===0?1:0},k:'詠唱',
    d:['相手ピースに2ダメージ','自分リーダーを2回復','味方ピースの攻撃と体力を+1','このターンの残りコストを+1','相手リーダーに2ダメージ'][i],ef:i}));
}

const overrides = {
  redp3:{a:3,h:4,c:2},
  redp5:{a:2,h:3,c:3,k:'',attackLimit:2,d:'1ターンに2回まで攻撃できる。'},
  redp0:{a:3,h:3,c:2,d:'召喚時、手札の火鉢バチ1体をコストなしで出せる。'},
  redp1:{a:3,h:8,c:4,d:'場に出た時、山札からピースをランダムに1枚手札に加える。'},
  redf0:{n:'花火師 多摩屋',a:8,h:10,cc:5,d:'相手のピースがトラッシュに送られた時、相手リーダーと全ピースに5ダメージ。各自分ターンに1回。'},
  whitep4:{k:'星導',linkBonus:1,d:'星導。連結している間、連結体の攻撃力を+1。'},
  whitep2:{h:5},
  whitep6:{d:'このピースを含む連結体に、場の3体目を接続できる。'},
  whitep7:{k:'盾',d:'相手の通常攻撃をこのピースに引きつける。'},
  greenp1:{k:'活性',a:2,h:3,d:'召喚したターンだけ最大コストと残りコストを1増やす。上限5。'},
};
const keywordText={
  '巡回':'召喚時に1枚引き、手札1枚を山札の一番下に戻す。',
  '成長':'ターン終了時、残りコストを1消費できれば攻撃と体力が永続で+1。',
  '星導':'凸凹が合わなくても連結できる。接続コストは必要。',
  '怨念':'このピースがトラッシュに置かれた時、場にいる味方の怨念ピースの攻撃力を+1。',
  '速攻':'召喚したターンに攻撃できる。',
};
  const specialEquipment={
    whitee0:{effect:'guard',a:0,h:0,d:'身代わり。装備ピースへの最初のダメージを防ぎ、装備はトラッシュへ。'},
    rede0:{effect:'boost',a:2,h:0,d:'装備ピースの攻撃力を+2。'},
    bluee0:{effect:'return',a:1,h:0,d:'攻撃力+1。装備を外すと手札に戻る。手札が満杯ならトラッシュへ。'},
  };
  const specialSpell={
    blues0:{effect:'draw',d:'カードを1枚引く。その後、巡回する。'},
    reds2:{effect:'break-equipment',d:'選んだ相手ピースの装備を破壊する。'},
    blacks0:{effect:'sacrifice',d:'接続した味方ピースをトラッシュに送り、相手リーダーに3ダメージ。'},
    blacks2:{effect:'weaken',d:'選んだ相手ピースの攻撃力を2下げる。最低0。'},
    blues2:{effect:'bounce',d:'選んだ相手の単独ピースを手札に戻す。'},
  };
for(const card of C) {
  if(card.t==='piece')card.d=keywordText[card.k]??'';
  Object.assign(card,overrides[card.id]);
  if(card.t==='equipment')card.d='装備ピースの攻撃力+'+card.a+'、体力+'+card.h+'。';
  Object.assign(card,specialEquipment[card.id],specialSpell[card.id]);
  if(card.t==='fusion'&&!card.id.endsWith('redf0')){
    card.d='素材：'+card.m.map(id=>C.find(material=>material.id===id).n).join('＋')+'。一体化リンク時、素材の盾・成長を引き継ぐ。';
  }
}
export {C as cards,R as factions};
export const leaderText={
  blue:'音海楽団のリーダーは、空の山札からカードを引こうとすると勝利します。',
};

export function attachmentChoices(unit,card) {
  if(!unit||!card?.e||Array.isArray(card.e))return [];
  return (unit.edges??[]).flatMap((edge,direction)=>{
    if(!edge||edge.used||edge.s==='無'||edge.s===card.e.s)return [];
    return [{direction,cost:card.e.s==='凸'?card.e.c:edge.c}];
  });
}

export function validateDeck(ids) {
  if (!Array.isArray(ids) || ids.length!==30) throw new Error('デッキを30枚にしてください。');
  const counts=new Map();
  let root;
  for (const id of ids) {
    const card=C.find(entry=>entry.id===id);
    if (!card||card.t==='fusion') throw new Error('融合ピースは別枠に登録してください。');
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
  return [...ids,...ids,...[0,2,4].map(i=>root+'s'+i),root+'e0',root+'x0',root+'x1'];
}
export function starterFusion(root){return [root+'f0',root+'f1',root+'f2'];}
export function validateFusion(ids,root){
  if(!Array.isArray(ids)||ids.length>3||new Set(ids).size!==ids.length||
    ids.some(id=>!C.some(card=>card.id===id&&card.r===root&&card.t==='fusion'))){
    throw new Error('融合ピースは同じルーツから最大3種類までです。');
  }
  return ids;
}

export function cpuDeckFor(root){
  const deck=deckFor(root);
  const deckCatalog=C.filter(card=>card.r===root&&card.t==='piece'&&card.id.startsWith(root+'x'));
  for(let i=16;i<22;i++){
    const cost=C.find(card=>card.id===deck[i]).c;
    const candidates=deckCatalog.filter(card=>card.c===cost&&!deck.includes(card.id));
    if(candidates.length)deck[i]=candidates[Math.floor(Math.random()*candidates.length)].id;
  }
  return deck;
}

export function prepare(deck,host,fusion=starterFusion(C.find(card=>card.id===deck[0]).r)) {
 const d=[...deck];
 for(let i=d.length-1;i>0;i--){
   const j=Math.floor(Math.random()*(i+1));
   [d[i],d[j]]=[d[j],d[i]];
 }
 return {hp:20,registeredFusion:[...fusion],fusion:[...fusion],h:d.splice(0,4),d,b:[],trash:[],cost:host?1:0,linkCost:host?1:0,capacity:host?1:0,pending:false,root:C.find(card=>card.id===deck[0]).r};
}

export function applyMove(state,seat,action){
 const opponent=seat==='host'?'guest':'host';
 if(state.winner)throw new Error('対戦は終了しています。');
 if(action.kind==='concede'){
   return {...state,winner:opponent,logs:['降参により対戦が終了しました。',...state.logs].slice(0,60)};
 }
 if(state.turn!==seat) throw new Error('相手のターンです。');
 state=structuredClone(state);
 const G={p:state[seat],c:state[opponent],round:state.round};
 const index=(n)=>Number.isInteger(n)&&n>=0&&n<9?n:-1;
 let handSel=index(action.hand),unitSel=index(action.unit),secondSel=index(action.second),targetSel=index(action.target);
 const log=(s)=>{state.logs.unshift(s);state.logs.length=Math.min(60,state.logs.length);};
 const recordHit=(player,name,amount,leader=false)=>{
   const id=(state.hitId??0)+1;
   state.hitId=id;
   state.hits=[...(state.hits??[]),{id,seat:player===G.p?seat:opponent,name,amount,leader}].slice(-48);
 };
 const damageLeader=(player,amount,source)=>{
   if(amount<=0)return;
   player.hp-=amount;
   recordHit(player,'リーダー',amount,true);
   log(source+' → '+(player===G.p?'自分':'相手')+'リーダーに'+amount+'ダメージ。');
 };
 const alert=(s)=>{throw new Error(s);};
 const connectionCost=player=>player.linkCost??player.cost;
 const spendConnection=(player,amount)=>{
   if(connectionCost(player)<amount)alert('接続コスト不足。');
   if(player.linkCost===undefined)player.cost-=amount;
   else player.linkCost-=amount;
 };


 const draw=(p,source)=>{
   if(!p.d.length){
     const owner=p===G.p?seat:opponent;
     const other=p===G.p?opponent:seat;
     state.winner=p.root==='blue'?owner:other;
     log(p.root==='blue'?'音海楽団のリーダーが山札切れで勝利！':'山札切れで対戦終了。');
     G.over=true;
     return [];
   }
   const id=p.d.shift();
   if(p.h.length>=9){
     p.trash.push(id);
     log((source?source+'：':'')+'手札上限により、引いた1枚がトラッシュへ。');
   }else{
     p.h.push(id);
     if(source)log(source+'で山札から1枚引きました。');
   }
   return [id];
 };
 const patrol=(p)=>{p.pending=true;log('巡回が発動。手札から1枚を山札の下へ戻します。');};
 const winCheck=()=>{if(G.c.hp<=0)state.winner=seat;if(G.p.hp<=0)state.winner=opponent;};
function makeUnit(c){return {n:c.n,id:c.id,r:c.r,a:c.a,hp:c.h,max:c.h,k:c.k||'',ready:c.k==='速攻',shield:c.k==='盾',edges:c.e?c.e.map(x=>({...x,used:false})):[],equip:null,mats:null,entered:G.round,growth:0,attacks:0,attackLimit:c.attackLimit??1,attacked:false}}
function boardSlots(p){return p.b.reduce((n,u)=>n+(u.mats?.length??1),0)}
function spendHand(){let id=G.p.h.splice(handSel,1)[0];handSel=-1;return C.find(x=>x.id===id)}
function drawPieceToHand(player) {
  if (player.h.length>=9) return;
  const candidates=player.d.flatMap((id,i)=>C.find(card=>card.id===id)?.t==='piece'?[i]:[]);
  if (candidates.length) {
    player.h.push(player.d.splice(candidates[Math.floor(Math.random()*candidates.length)],1)[0]);
    log('山札からピースを1枚手札に加えました。');
  }
}
function summon() {
  const player=G.p;
  const card=C.find(entry=>entry.id===player.h[handSel]);
  if(card?.t!=='piece')return;
  if(boardSlots(player)>=3)alert('場は最大3枠。');
  if(player.cost<card.c)alert('召喚コスト不足。');
  player.cost-=card.c;
  spendHand();
  player.b.push(makeUnit(card));
  log(card.n+'を召喚！');
  if(card.id==='redp0'&&player.h.includes('redp1')&&boardSlots(player)<3)player.freeFirework=true;
  if(card.id==='redp1')drawPieceToHand(player);
  if(card.k==='活性'&&player.capacity<5&&!player.activated){
    player.activated=true;
    player.cost++;
    log(card.n+'の活性で召喚コスト+1。');
  }
  if(card.k==='巡回'){
    draw(player,card.n+'の巡回');
    if(!G.over)patrol(player);
  }
}
function fuse(){let p=G.p,c=C.find(x=>x.id===(p.fusion? action.fusion:p.h[handSel]));if(!c||c.t!=='fusion'||(p.fusion&&!p.fusion.includes(c.id)))return;if(connectionCost(p)<c.cc)return alert('接続コスト不足。');if(p.b.length<2)return alert('融合素材2体が必要。');let a=unitSel,b=secondSel;if(a===b||!p.b[a]||!p.b[b])return;let u=p.b[a],v=p.b[b];if(u.mats||v.mats||u.equip||v.equip)return alert('装備中のピースは融合できません。');if(!c.m||u.id===v.id||![u.id,v.id].every(id=>c.m.includes(id)))return alert('この融合カードの指定素材ではありません。');spendConnection(p,c.cc);let indices=[a,b].sort((x,y)=>y-x);for(let i of indices){let m=p.b.splice(i,1)[0];toTrash(p,m,'融合素材')}let f=c;if(p.fusion)p.fusion=p.fusion.filter(id=>id!==f.id);else spendHand();let x=makeUnit(f);x.ready=false;x.shield=u.shield||v.shield;x.grows=u.k==='成長'||v.k==='成長';p.b.push(x);log(u.n+'＋'+v.n+' → '+f.n+'！接続コスト'+f.cc+'を使用。')}
function edgePair(u,v,direction) {
  const star=u.k==='星導'||v.k==='星導';
  let fallback;
  for(let i=0;i<4;i++){
    if(direction!==undefined&&direction!==i)continue;
    const j=(i+2)%4;
    const a=u.edges?.[i],b=v.edges?.[j];
    if(a?.used||b?.used)continue;
    if(a?.s==='凸'&&b?.s==='凹')return {i,j,c:a.c};
    if(a?.s==='凹'&&b?.s==='凸')return {i,j,c:b.c};
    if(star)fallback??={i,j,c:a?.s==='凸'?a.c:b?.s==='凸'?b.c:1,star:true};
  }
  return fallback;
}
function connect(){
  const p=G.p,u=p.b[unitSel],v=p.b[secondSel];
  if(!u||!v||u===v)return;
  if(u.equip||v.equip||[u,v].some(unit=>C.find(card=>card.id===unit.id)?.t==='fusion'))alert('装備中や一体化済みのピースは連結できません。');
  const mats=[...(u.mats??[u]),...(v.mats??[v])];
  if(mats.length>3||mats.length===3&&!mats.some(piece=>piece.id==='whitep6'))alert('3体連結にはジェミニが必要です。');
  let pair;
  for (const left of u.mats??[u]) {
    for(const right of v.mats??[v]){
      const candidate=edgePair(left,right,action.direction);
      if(candidate&&(!pair||candidate.c<pair.c))pair={...candidate,left,right};
    }
  }
  if(!pair)alert('接続できる辺がありません。');
  spendConnection(p,pair.c);
  if(pair.left.edges?.[pair.i])pair.left.edges[pair.i].used=true;
  if(pair.right.edges?.[pair.j])pair.right.edges[pair.j].used=true;
  const merged={id:'link',r:u.r,k:'連結',edges:[],mats,ready:u.ready&&v.ready,
    attacked:u.attacked||v.attacked,entered:G.round};
  updateLink(merged);
  for(const i of [unitSel,secondSel].sort((a,b)=>b-a))p.b.splice(i,1);
  p.b.push(merged);
  log(merged.n+'が成立しました。接続コスト'+pair.c+'。');
  for(const material of mats){
    const bonus=C.find(card=>card.id===material.id)?.linkBonus;
    if(bonus)log(material.n+'の連結効果で攻撃力+'+bonus+'。');
  }
}
function updateLink(unit){
  const mats=unit.mats;
  unit.n=mats.map(piece=>piece.n).join('＋')+' LINK';
  unit.hp=mats.reduce((sum,piece)=>sum+piece.hp,0);
  unit.max=mats.reduce((sum,piece)=>sum+piece.max,0);
  unit.a=Math.max(0,mats.reduce((sum,piece)=>sum+piece.a+(C.find(card=>card.id===piece.id)?.linkBonus??0),0)+(unit.bonus??0));
  unit.shield=mats.some(piece=>piece.shield||piece.k==='盾');
}
function toTrash(p,u,why){if(u.mats){u.mats.forEach(m=>{p.trash.push(m.id||'linked-material');if(m.k==='怨念')resent(p,m.n)})}else{p.trash.push(u.id);if(u.k==='怨念')resent(p,u.n)}if(u.equip)p.trash.push(u.equip.id);log(u.n+'はトラッシュへ（'+why+'）。');}
function resent(p,n){p.b.forEach(u=>{if(u.k==='怨念'&&u.id!=='link'){u.a++;log(u.n+'の怨念！攻撃力+1。')}})}
function damageUnit(player,index,damage){
  const unit=player.b[index];
  if(!unit||damage<=0)return;
  if(!unit.mats){
    if(unit.equip?.effect==='guard'&&damage>0){
      removeEquipment(player,unit,false);
      log(unit.n+'の装備がダメージを防ぎました。');
      return;
    }
    recordHit(player,unit.n,damage);
    unit.hp-=damage;
    log(unit.n+'に'+damage+'ダメージ！');
    if(unit.hp<=0){player.b.splice(index,1);toTrash(player,unit,'破壊');}
    return;
  }
  recordHit(player,unit.n,damage);
  log(unit.n+'に'+damage+'ダメージ！');
  unit.mats.sort((a,b)=>a.hp-b.hp);
  for(const piece of unit.mats){
    const dealt=Math.min(damage,piece.hp);
    damage-=dealt;
    piece.hp-=dealt;
    if(piece.hp===0){player.trash.push(piece.id);if(piece.k==='怨念')resent(player,piece.n);log(piece.n+'がトラッシュへ。');}
  }
  unit.mats=unit.mats.filter(piece=>piece.hp>0);
  if(!unit.mats.length)player.b.splice(index,1);
  else if(unit.mats.length===1){
    const [survivor]=unit.mats;
    player.b[index]={...makeUnit(C.find(card=>card.id===survivor.id)),...survivor,
      ready:unit.ready,attacked:unit.attacked,attacks:unit.attacks??0};
  } else updateLink(unit);
}
function attack(){
  const {p,c}=G;
  const attacker=p.b[unitSel];
  if(!attacker||!attacker.ready||targetSel>=c.b.length)return;
  const defender=c.b[targetSel];
  if(c.b.some(unit=>unit.shield)&&!defender?.shield)alert('相手に盾がいるため盾を選んでください。');
  const attackPower=attacker.a;
  attacker.attacks=(attacker.attacks??0)+1;
  attacker.ready=attacker.attacks<(attacker.attackLimit??1);
  attacker.attacked=true;
  if(defender){
    const retaliation=defender.a;
    if(attackPower>0)damageUnit(c,targetSel,attackPower);
    if(retaliation>0)damageUnit(p,unitSel,retaliation);
  }else{
    damageLeader(c,attackPower,attacker.n);
  }
  unitSel=targetSel=-1;
  winCheck();
}
function attachment(unit,card){
  const choices=attachmentChoices(unit,card).filter(item=>action.direction===undefined||action.direction===item.direction);
  return choices.reduce((best,item)=>!best||item.cost<best.cost?item:best,null);
}
function equip(){
  const p=G.p,card=C.find(entry=>entry.id===p.h[handSel]),unit=p.b[unitSel];
  if(card?.t!=='equipment'||!unit||unit.mats||unit.equip||C.find(entry=>entry.id===unit.id)?.t!=='piece')alert('装備できるのは装備なしの単独ピースのみ。');
  const join=attachment(unit,card);
  if(!join)alert('装備カードと凸凹が合う未使用辺がありません。');
  spendConnection(p,join.cost);
  unit.edges[join.direction].used=true;
  unit.equip={id:card.id,n:card.n,a:card.a,h:card.h,effect:card.effect,direction:join.direction};
  unit.a+=card.a;unit.hp+=card.h;unit.max+=card.h;
  spendHand();
  log(card.n+'を'+unit.n+'に装備。接続コスト'+join.cost+'。');
  if(card.a||card.h)log('装備効果：'+unit.n+'の攻撃力'+(card.a>=0?'+':'')+card.a+'、体力'+(card.h>=0?'+':'')+card.h+'。');
}
function removeEquipment(player,unit,allowReturn){
  const equipment=unit.equip;
  unit.a=Math.max(0,unit.a-equipment.a);
  unit.max-=equipment.h;
  unit.hp=Math.min(unit.hp,unit.max);
  unit.equip=null;
  if(Number.isInteger(equipment.direction)&&unit.edges?.[equipment.direction]){
    unit.edges[equipment.direction].used=false;
  }
  if(allowReturn&&equipment.effect==='return'&&player.h.length<9){
    player.h.push(equipment.id);
    log(equipment.n+'を手札へ戻しました。');
  }else{
    player.trash.push(equipment.id);
    log(equipment.n+'をトラッシュへ。');
  }
}
function detach(){
  const unit=G.p.b[unitSel];
  if(unit?.equip)removeEquipment(G.p,unit,true);
}
function spell(){
  const p=G.p, card=C.find(entry=>entry.id===p.h[handSel]);
  const unit=p.b[unitSel], enemy=G.c.b[targetSel];
  if(card?.t!=='spell'||!unit)return;
  const join=attachment(unit,card);
  if(!join)alert('詠唱と凸凹が合う辺がありません。');
  const cost=join.cost;
  spendConnection(p,cost);
  spendHand();
  log(card.n+'を使用（接続コスト'+cost+'）。');
  switch(card.effect??card.ef){
    case 'draw':
      draw(p,card.n+'の効果');
      if(!G.over)patrol(p);
      break;
    case 'break-equipment':
      if(!enemy?.equip)alert('装備がある相手ピースを選んでください。');
      removeEquipment(G.c,enemy,false);
      break;
    case 'sacrifice':
      p.b.splice(unitSel,1);
      toTrash(p,unit,'詠唱の効果');
      damageLeader(G.c,3,card.n);
      break;
    case 'weaken':
      if(!enemy)alert('相手のピースを選んでください。');
      const attackBefore=enemy.a;
      if(enemy.mats){
        enemy.bonus=(enemy.bonus??0)-2;
        updateLink(enemy);
      }else enemy.a=Math.max(0,enemy.a-2);
      log(enemy.n+'の攻撃力：'+attackBefore+' → '+enemy.a+'。');
      break;
    case 'bounce':
      if(!enemy||enemy.mats||C.find(card=>card.id===enemy.id)?.t!=='piece')alert('相手の単独ピースを選んでください。');
      G.c.b.splice(targetSel,1);
      if(enemy.equip)removeEquipment(G.c,enemy,false);
      if(G.c.h.length>=9)toTrash(G.c,enemy,'手札上限');
      else{
        G.c.h.push(enemy.id);
        log(enemy.n+'が相手の手札に戻りました。');
      }
      break;
    case 0:
      if(!enemy)alert('相手のピースを選んでください。');
      damageUnit(G.c,targetSel,2);
      break;
    case 1: {
      const before=p.hp;
      p.hp=Math.min(20,p.hp+2);
      log('リーダーが'+(p.hp-before)+'回復（体力'+p.hp+'）。');
      break;
    }
    case 2:
      if(unit.mats){unit.bonus=(unit.bonus??0)+1;unit.mats[0].hp++;unit.mats[0].max++;updateLink(unit);}
      else{unit.a++;unit.hp++;unit.max++;}
      log(unit.n+'の攻撃力・体力が1増加。');
      break;
    case 3: {
      const before=p.cost;
      p.cost=Math.min(5,p.cost+1);
      log('召喚コスト：'+before+' → '+p.cost+'。');
      break;
    }
    case 4: damageLeader(G.c,2,card.n); break;
  }
  winCheck();
}
function grow(player){
  for(const unit of player.b){
    for(const piece of unit.mats??[unit]){
      if((piece.k!=='成長'&&!piece.grows)||player.cost<1)continue;
      player.cost--;
      piece.a++;piece.hp++;piece.max++;
      piece.growth=(piece.growth??0)+1;
      log(piece.n+'が成長！ 攻撃・体力+1。');
    }
    if(unit.mats)updateLink(unit);
  }
}
 const before=JSON.stringify(state);
 const opponentTrash=G.c.trash.length;
 if(G.p.pending&&action.kind!=='patrol') alert('巡回で戻す手札を選んでください。');
 switch(action.kind){
  case 'patrol':
    if(!G.p.pending||!G.p.h[handSel])alert('戻す手札を選んでください。');
    G.p.d.push(G.p.h.splice(handSel,1)[0]);
    G.p.pending=false;
    log('巡回で手札を1枚戻しました。');
    break;
  case 'summon': summon(); break;
  case 'firework': {
    if(!G.p.freeFirework||G.p.h[handSel]!=='redp1'||boardSlots(G.p)>=3)alert('火鉢バチを選んでください。');
    G.p.freeFirework=false;
    const card=spendHand();
    G.p.b.push(makeUnit(card));
    log(card.n+'をコストなしで召喚！');
    drawPieceToHand(G.p);
    break;
  }
  case 'fuse': fuse(); break;
  case 'connect': connect(); break;
  case 'attack':
    if(action.target!==-1&&(!Number.isInteger(action.target)||action.target<0||action.target>=G.c.b.length))alert('攻撃対象を選んでください。');
    attack();
    break;
  case 'equip': equip(); break;
  case 'spell': spell(); break;
  case 'detach': detach(); break;
  case 'end':
    grow(G.p);
    G.p.cost=0;
    if(G.p.linkCost!==undefined)G.p.linkCost=0;
    G.p.freeFirework=false;
    G.p.activated=false;
    G.c.capacity=Math.min(5,G.c.capacity+1);
    G.c.cost=G.c.capacity;
    if(G.c.linkCost!==undefined)G.c.linkCost=G.c.capacity;
    for(const unit of G.c.b){unit.ready=true;unit.attacked=false;unit.attacks=0;unit.tamayaTriggered=false;}
    state.turn=opponent;
    if(opponent==='host')state.round++;
    draw(G.c);
    break;
  default: alert('操作が無効です。');
 }
 if(action.kind!=='end'&&G.c.trash.slice(opponentTrash).some(id=>{
   const type=C.find(card=>card.id===id)?.t;
   return type==='piece'||type==='fusion';
 })) {
   for(const tamaya of G.p.b.filter(unit=>unit.id==='redf0'&&!unit.tamayaTriggered)){
     tamaya.tamayaTriggered=true;
     log(tamaya.n+'の効果が発動！');
     damageLeader(G.c,5,tamaya.n);
     for(let i=G.c.b.length-1;i>=0;i--)damageUnit(G.c,i,5);
   }
   winCheck();
 }
 if(JSON.stringify(state)===before)alert('その操作はできません。');
 return state;
}

export function playCpuTurn(state) {
  const seat='guest';
  const tryMove=(move)=>{
    try{state=applyMove(state,seat,move);return true;}catch{return false;}
  };
  if(state.turn!==seat||state.winner)return state;
  const settlePatrol=()=>{
    if(!state.guest.pending)return;
    const index=state.guest.h.findIndex(id=>C.find(card=>card.id===id).t!=='piece');
    tryMove({kind:'patrol',hand:Math.max(0,index)});
  };
  settlePatrol();
  for(let step=0;step<8&&!state.winner;step++){
    const {h,b}=state.guest;
    if(b.length<3&&state.guest.freeFirework&&tryMove({kind:'firework',hand:h.indexOf('redp1')}))continue;
    let played=false;
    for(const id of state.guest.fusion??[]){
      const card=C.find(entry=>entry.id===id);
      const unit=b.findIndex(piece=>piece.id===card.m[0]);
      const second=b.findIndex(piece=>piece.id===card.m[1]);
      if(unit>=0&&second>=0&&tryMove({kind:'fuse',fusion:id,unit,second})){played=true;break;}
    }
    for(let hand=0;hand<h.length&&!played;hand++){
      const card=C.find(entry=>entry.id===h[hand]);
      if(card.t==='piece')played=tryMove({kind:'summon',hand});
      if(card.t==='fusion'){
        const unit=b.findIndex(piece=>piece.id===card.m[0]);
        const second=b.findIndex(piece=>piece.id===card.m[1]);
        if(unit>=0&&second>=0)played=tryMove({kind:'fuse',hand,unit,second});
      }
      if(card.t==='equipment'||card.t==='spell'){
        for(let unit=0;unit<b.length&&!played;unit++){
          const target=state.host.b.length?0:-1;
          if(card.t==='spell'&&card.ef===1&&state.guest.hp===20)continue;
          if(card.t==='spell'&&card.ef===3)continue;
          played=tryMove({kind:card.t==='equipment'?'equip':'spell',hand,unit,target});
        }
      }
    }
    if(!played)break;
    settlePatrol();
  }
  for(let unit=0;unit<state.guest.b.length&&!state.winner;unit++){
    const fieldCount=state.guest.b.length;
    const opponent=state.host;
    let target=opponent.b.findIndex(piece=>piece.shield);
    if(target<0&&opponent.hp>state.guest.b[unit].a)target=opponent.b.findIndex(piece=>piece.hp<=state.guest.b[unit].a);
    if(tryMove({kind:'attack',unit,target})&&!state.winner&&(state.guest.b.length<fieldCount||state.guest.b[unit]?.ready)){
      unit--;
    }
  }
  if(!state.winner)tryMove({kind:'end'});
  return state;
}
