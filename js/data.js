/** Canonical game catalogue. Server and browser consume the same immutable data. */
function freeze(value) {
  if (value && typeof value === 'object' && !Object.isFrozen(value)) {
    Object.values(value).forEach(freeze);
    Object.freeze(value);
  }
  return value;
}

export const GAME = freeze({version:1,capacity:100,maxXp:1_000_000_000,maxCoins:1_000_000_000,oceanSize:4000});
export const RARITIES = freeze(Object.assign(Object.create(null),{
  Normal: {weight:68,xp:12,price:12,speed:0.20,color:'#c0dcd9',label:'Normal'},
  Rare: {weight:25,xp:32,price:28,speed:0.28,color:'#5dafef',label:'Rare'},
  Legendary: {weight:6,xp:80,price:45,speed:0.36,color:'#efb955',label:'Legendary'},
  Mythic: {weight:0.9,xp:180,price:80,speed:0.44,color:'#c991f1',label:'Mythic'},
  '???': {weight:0.1,xp:400,price:150,speed:0.52,color:'#ff658f',label:'???'},
  King: {weight:0.01,xp:1000,price:500,speed:0.62,color:'#ff243f',label:'King'}
}));
export const RODS = freeze(Object.assign(Object.create(null),{
  starter:{id:'starter',name:'Driftwood Rod',description:'Таны анхны найдвартай саваа.',price:0,width:0.24,luck:1,color:'#a5825e'},
  river:{id:'river',name:'River Whisper',description:'Илүү өргөн удирдах бар, тайван таталт.',price:150,width:0.30,luck:1,color:'#60c9b5'},
  ocean:{id:'ocean',name:'Ocean Sovereign',description:'Өргөн бар, ховор загасны сонголтын жин +35%.',price:650,width:0.36,luck:1.35,color:'#e7b34e'},
  jade:{id:'jade',name:'Jade Current',description:'Хаш чулуун бариул, тогтвортой удирдлага. Ховор загасны сонголтын жин ×1.75.',price:10000,width:0.40,luck:1.75,color:'#43b89a'},
  temple:{id:'temple',name:'Temple Tide',description:'Эртний туурийн хүч. Ховор загасны сонголтын жин ×2.5.',price:50000,width:0.46,luck:2.5,color:'#c7a45c'},
  eclipse:{id:'eclipse',name:'Eclipse Relic',description:'Таван өргөлөөс сэрсэн нууц саваа. Ховор загасны сонголтын жин ×3.5.',price:100000,width:0.52,luck:3.5,color:'#ad8de0',acquisition:'trade'},
  rare_tideglass:{id:'rare_tideglass',name:'Tideglass Rod',description:'Тунгалаг шилэн иштэй, тогтвортой ховор загасны саваа.',price:18000,width:0.42,luck:1.9,color:'#56d5cf',rarity:'Rare'},
  rare_ember:{id:'rare_ember',name:'Emberwake Rod',description:'Галт урсгалд зориулсан хөнгөн саваа.',price:24000,width:0.43,luck:2.05,color:'#ff795f',rarity:'Rare'},
  rare_moon:{id:'rare_moon',name:'Moonlit Rod',description:'Сарны эрэгт ховор загас илрүүлэх чадвартай.',price:30000,width:0.44,luck:2.2,color:'#b8b7ff',rarity:'Rare'},
  rare_reef:{id:'rare_reef',name:'Reefcaller Rod',description:'Шүрэн арлын гүнд зориулсан тусгай саваа.',price:36000,width:0.445,luck:2.3,color:'#f0a58f',rarity:'Rare'},
  rare_tempest:{id:'rare_tempest',name:'Tempest Rod',description:'Салхи, давалгаанд тэнцвэрээ хадгална.',price:42000,width:0.45,luck:2.45,color:'#7eb8ed',rarity:'Rare'},
  rare_abyss:{id:'rare_abyss',name:'Abyss Thread',description:'Гүн усны ховор олзыг онилно.',price:52000,width:0.46,luck:2.6,color:'#9878c9',rarity:'Rare'},
  rare_kingfisher:{id:'rare_kingfisher',name:'Kingfisher Rod',description:'Өндөр түвшний арлуудад зориулсан ховор саваа.',price:68000,width:0.47,luck:2.8,color:'#e6bd64',rarity:'Rare'},
  legendary_sunforge:{id:'legendary_sunforge',name:'Sunforge Rod',description:'Домогт хэмжээний загасанд илүү өргөн таталтын цонх өгнө.',price:150000,width:0.54,luck:3.2,color:'#ffb44d',rarity:'Legendary',sizeMultiplier:1.12},
  legendary_void:{id:'legendary_void',name:'Voidcaller Rod',description:'Домогт загасны жингийн боломжийг нэмэгдүүлнэ.',price:225000,width:0.56,luck:3.6,color:'#ba8cff',rarity:'Legendary',sizeMultiplier:1.18},
  legendary_crown:{id:'legendary_crown',name:'Crown of Tides',description:'Эзэнт гүрний хамгийн хүчирхэг домогт саваа.',price:350000,width:0.58,luck:4.0,color:'#ff718d',rarity:'Legendary',sizeMultiplier:1.25}
}));
export const SECRET_TRADE=freeze({rodId:'eclipse',islandId:'sanctuary',level:7,price:100000,speciesIds:['n11','r09','l05','m03','u02'],offset:[-112,-76],radius:7});
export const ISLANDS = freeze(Object.assign(Object.create(null),{
  palm:{id:'palm',name:'Palm Bay',subtitle:'Эхлэл бүхэн нэг эргээс',biome:'tropical',level:1,radius:180,center:[0,0],color:'#6cc9a8',sky:'#b1dfe0',sand:'#ead7ad',ground:'#638d4d',rock:'#8b9682',seed:1842},
  coral:{id:'coral',name:'Coral Reef',subtitle:'Шүрэн эргийн нууц',biome:'coral',level:3,radius:165,center:[-820,-650],color:'#ed998b',sky:'#d6d9e4',sand:'#f1c8b0',ground:'#798b5a',rock:'#aa6557',seed:8221},
  frost:{id:'frost',name:'Frostpeak',subtitle:'Мөсөн доорх домог',biome:'alpine',level:5,radius:210,center:[650,-1120],color:'#9bcde2',sky:'#c4dce9',sand:'#dbe7e5',ground:'#91a5a6',rock:'#718892',seed:9543},
  sanctuary:{id:'sanctuary',name:'Sunken Sanctuary',subtitle:'Таван загас, мартагдсан нэг нууц',biome:'ruins',level:7,radius:225,center:[1070,580],color:'#90b8a1',sky:'#c1d6d0',sand:'#d8ceae',ground:'#557a69',rock:'#747e76',seed:6274},
  ember:{id:'ember',name:'Ember Atoll',subtitle:'Галт урсгалын арлууд',biome:'coral',level:9,radius:205,center:[-1280,760],color:'#ff9678',sky:'#e8b9b0',sand:'#f1c0a0',ground:'#a65c47',rock:'#74433f',seed:3177},
  moonfall:{id:'moonfall',name:'Moonfall Reach',subtitle:'Сарны гэрэлд гялалзах мөсөн эрэг',biome:'alpine',level:11,radius:220,center:[1450,-1260],color:'#b4b8ff',sky:'#d8d5f0',sand:'#d9d5e7',ground:'#7d789f',rock:'#5d5c83',seed:7419},
  kingreach:{id:'kingreach',name:'Kingreach Abyss',subtitle:'King загасны сүүлчийн эзэнт гүрэн',biome:'ruins',level:13,radius:245,center:[-1510,-1190],color:'#ff4568',sky:'#a87b98',sand:'#d8a0b0',ground:'#5f304b',rock:'#44223e',seed:9981}
}));

const rows = [
 ['n01','Silver Minnow','Normal',100,450,'palm','fish','#a9d7db','#e8eff0',0.75],
 ['n02','River Perch','Normal',300,1400,'palm','fish','#6c8c58','#d3c67e',1.1],
 ['n03','Blue Sardine','Normal',100,600,'palm','fish','#4b85aa','#d7e0e4',0.7],
 ['n04','Reef Bass','Normal',1000,4000,'coral','fish','#73965b','#c4d2a1',1.2],
 ['n05','Coral Bream','Normal',500,3000,'coral','fish','#df9a8f','#f2cec0',1.35],
 ['n06','Red Snapper','Normal',1000,6000,'coral','fish','#c75850','#f0b892',1.15],
 ['n07','Ice Herring','Normal',200,1000,'frost','fish','#84b9c4','#edf8f9',0.75],
 ['n08','Snow Trout','Normal',800,4000,'frost','fish','#8bafc4','#eddbd2',1.0],
 ['n09','Arctic Cod','Normal',1000,8000,'frost','fish','#769394','#d9dfbb',0.85],
 ['n10','White Mackerel','Normal',500,3000,'frost','fish','#547b98','#e4e8e5',0.85],
 ['r01','Golden Carp','Rare',1500,8000,'palm','fish','#dba649','#f6d982',1.25],
 ['r02','Moon Trout','Rare',1000,5000,'palm','fish','#7c9de0','#d3d6ff',1.05],
 ['r03','Emerald Koi','Rare',700,3500,'palm','koi','#3caf8a','#f1e7d4',1.25],
 ['r04','Ruby Grouper','Rare',3000,15000,'coral','fish','#b9546c','#f6c0a0',1.45],
 ['r05','Flame Eel','Rare',1000,7000,'coral','eel','#d56835','#f2c55c',0.5],
 ['r06','Sunscale Pike','Rare',2000,12000,'coral','pike','#aa9a48','#e8cb61',0.7],
 ['r07','Crystal Salmon','Rare',3000,18000,'frost','fish','#89cdda','#e1b6e1',1.0],
 ['r08','Aurora Tuna','Rare',5000,25000,'frost','tuna','#557fd0','#79dacd',1.35],
 ['l01','Crown Marlin','Legendary',15000,70000,'palm','billfish','#42699e','#ddb951',0.9],
 ['l02','Sunfin Swordfish','Legendary',20000,90000,'coral','billfish','#c48247','#f4d077',1.0],
 ['l03','Glacier Shark','Legendary',40000,180000,'frost','shark','#6296ad','#dcebf0',1.1],
 ['l04','Starlight Ray','Legendary',10000,60000,'frost','ray','#556caa','#bbb9ee',1.7],
 ['m01','Phoenix Ray','Mythic',25000,120000,'coral','ray','#e99a62','#ffe3a1',1.9],
 ['m02','Frost Leviathan','Mythic',80000,400000,'frost','serpent','#62becd','#d7f4f5',0.8],
 ['u01','Abyssal Sovereign','???',150000,1000000,'frost','leviathan','#554987','#e889bf',1.5],
 ['n11','Mossfin Carp','Normal',1500,9000,'sanctuary','fish','#6d9c83','#d0d9a1',1.2],
 ['r09','Jade Koi','Rare',4000,22000,'sanctuary','koi','#36ad97','#e6d9a3',1.4],
 ['l05','Temple Arowana','Legendary',25000,140000,'sanctuary','fish','#b99c54','#f4dfa0',1.65],
 ['m03','Spirit Serpent','Mythic',100000,500000,'sanctuary','serpent','#80bfc2','#e0c6f3',0.9],
 ['u02','Eclipse Guardian','???',200000,1200000,'sanctuary','leviathan','#4b476b','#cfa0df',1.65],
 ['n12','Cinder Minnow','Normal',150,1800,'ember','fish','#c95738','#ffad63',0.65],
 ['n13','Ashfin Dace','Normal',168,1944,'ember','fish','#c95738','#ffad63',0.82],
 ['n14','Lava Pebblefish','Normal',186,2088,'ember','fish','#c95738','#ffad63',0.99],
 ['r10','Ember Koi','Rare',2448,14880,'ember','koi','#c95738','#ffad63',1.16],
 ['r11','Magma Eel','Rare',2664,15840,'ember','koi','#c95738','#ffad63',1.33],
 ['n15','Moonflake Smelt','Normal',150,2520,'moonfall','fish','#8f8de0','#e0d8ff',1.50],
 ['n16','Silver Cometfish','Normal',168,2664,'moonfall','fish','#8f8de0','#e0d8ff',1.67],
 ['n17','Frostglass Perch','Normal',186,1800,'moonfall','fish','#8f8de0','#e0d8ff',1.84],
 ['r12','Lunarfrost Salmon','Rare',2448,12960,'moonfall','koi','#8f8de0','#e0d8ff',2.01],
 ['l06','Moonfall Ray','Legendary',17760,92800,'moonfall','ray','#8f8de0','#e0d8ff',0.65],
 ['n18','Abyss Lanternfish','Normal',150,2232,'kingreach','fish','#742544','#ff5d83',0.82],
 ['n19','Gloomscale Carp','Normal',168,2376,'kingreach','fish','#742544','#ff5d83',0.99],
 ['n20','Riftfin Guppy','Normal',186,2520,'kingreach','fish','#742544','#ff5d83',1.16],
 ['n21','Obsidian Perch','Normal',204,2664,'kingreach','fish','#742544','#ff5d83',1.33],
 ['n22','Deepcurrent Bream','Normal',222,1800,'kingreach','fish','#742544','#ff5d83',1.50],
 ['n23','Crownless Snapper','Normal',150,1944,'kingreach','fish','#742544','#ff5d83',1.67],
 ['n24','Duskstripe Eel','Normal',168,2088,'kingreach','fish','#742544','#ff5d83',1.84],
 ['n25','Blackwater Herring','Normal',186,2232,'kingreach','fish','#742544','#ff5d83',2.01],
 ['n26','Abyssal Mullet','Normal',204,2376,'kingreach','fish','#742544','#ff5d83',0.65],
 ['n27','Gravestone Cod','Normal',222,2520,'kingreach','fish','#742544','#ff5d83',0.82],
 ['n28','Nightglass Trout','Normal',150,2664,'kingreach','fish','#742544','#ff5d83',0.99],
 ['n29','Ruinfin Bass','Normal',168,1800,'kingreach','fish','#742544','#ff5d83',1.16],
 ['n30','Shadow Pike','Normal',186,1944,'kingreach','fish','#742544','#ff5d83',1.33],
 ['n31','Stormvault Sardine','Normal',204,2088,'kingreach','fish','#742544','#ff5d83',1.50],
 ['n32','Darkwater Mackerel','Normal',222,2232,'kingreach','fish','#742544','#ff5d83',1.67],
 ['n33','Kingreach Drum','Normal',150,2376,'kingreach','fish','#742544','#ff5d83',1.84],
 ['n34','Voidline Anchovy','Normal',168,2520,'kingreach','fish','#742544','#ff5d83',2.01],
 ['n35','Thornback Goby','Normal',186,2664,'kingreach','fish','#742544','#ff5d83',0.65],
 ['n36','Lost Crownfish','Normal',204,1800,'kingreach','fish','#742544','#ff5d83',0.82],
 ['r13','Bloodmoon Koi','Rare',2664,12960,'kingreach','koi','#742544','#ff5d83',0.99],
 ['r14','Crimson Lanternfish','Rare',1800,13920,'kingreach','koi','#742544','#ff5d83',1.16],
 ['r15','Riftglass Ray','Rare',2016,14880,'kingreach','koi','#742544','#ff5d83',1.33],
 ['r16','Dreadnought Eel','Rare',2232,15840,'kingreach','koi','#742544','#ff5d83',1.50],
 ['r17','Scarlet Abyss Carp','Rare',2448,16800,'kingreach','koi','#742544','#ff5d83',1.67],
 ['r18','Phantom Marlin','Rare',2664,17760,'kingreach','koi','#742544','#ff5d83',1.84],
 ['r19','Ironjaw Grouper','Rare',1800,12000,'kingreach','koi','#742544','#ff5d83',2.01],
 ['r20','Nightfall Tuna','Rare',2016,12960,'kingreach','koi','#742544','#ff5d83',0.65],
 ['r21','Wraithfin Pike','Rare',2232,13920,'kingreach','koi','#742544','#ff5d83',0.82],
 ['r22','Stormcrown Salmon','Rare',2448,14880,'kingreach','koi','#742544','#ff5d83',0.99],
 ['r23','Redshift Sturgeon','Rare',2664,15840,'kingreach','koi','#742544','#ff5d83',1.16],
 ['r24','Abyss Jewelfish','Rare',1800,16800,'kingreach','koi','#742544','#ff5d83',1.33],
 ['l07','Kingreach Marlin','Legendary',13440,118400,'kingreach','ray','#742544','#ff5d83',1.50],
 ['l08','Crimson Leviathan','Legendary',14880,80000,'kingreach','ray','#742544','#ff5d83',1.67],
 ['l09','Ruinbreaker Shark','Legendary',16320,86400,'kingreach','ray','#742544','#ff5d83',1.84],
 ['l10','Crownfire Swordfish','Legendary',17760,92800,'kingreach','ray','#742544','#ff5d83',2.01],
 ['l11','Abyssal Phoenix Ray','Legendary',12000,99200,'kingreach','ray','#742544','#ff5d83',0.65],
 ['l12','Void Emperor Eel','Legendary',13440,105600,'kingreach','ray','#742544','#ff5d83',0.82],
 ['l13','Bloodstar Manta','Legendary',14880,112000,'kingreach','ray','#742544','#ff5d83',0.99],
 ['l14','Dreadtide Serpent','Legendary',16320,118400,'kingreach','ray','#742544','#ff5d83',1.16],
 ['l15','Obsidian Colossus','Legendary',17760,80000,'kingreach','ray','#742544','#ff5d83',1.33],
 ['l16','Eternal Stormray','Legendary',12000,86400,'kingreach','ray','#742544','#ff5d83',1.50],
 ['l17','Cinder Crownfish','Legendary',13440,92800,'kingreach','ray','#742544','#ff5d83',1.67],
 ['l18','The Last Sovereign','Legendary',14880,99200,'kingreach','ray','#742544','#ff5d83',1.84],
 ['m04','Elder Rift Serpent','Mythic',81600,369600,'kingreach','serpent','#742544','#ff5d83',2.01],
 ['m05','Crimson Worldshark','Mythic',88800,392000,'kingreach','serpent','#742544','#ff5d83',0.65],
 ['m06','Moon-Eater Ray','Mythic',60000,414400,'kingreach','serpent','#742544','#ff5d83',0.82],
 ['m07','Abyssal Dragonfish','Mythic',67200,280000,'kingreach','serpent','#742544','#ff5d83',0.99],
 ['m08','Crown of the Deep','Mythic',74400,302400,'kingreach','serpent','#742544','#ff5d83',1.16],
 ['m09','King\'s Phantom','Mythic',81600,324800,'kingreach','serpent','#742544','#ff5d83',1.33],
 ['m10','Starless Leviathan','Mythic',88800,347200,'kingreach','serpent','#742544','#ff5d83',1.50],
 ['m11','The Drowned Titan','Mythic',60000,369600,'kingreach','serpent','#742544','#ff5d83',1.67],
 ['u03','??? Redacted One','???',112000,1260000,'kingreach','leviathan','#742544','#ff5d83',1.84],
 ['u04','??? Black Crown','???',124000,1332000,'kingreach','leviathan','#742544','#ff5d83',2.01],
 ['u05','??? Sunken Name','???',136000,900000,'kingreach','leviathan','#742544','#ff5d83',0.65],
 ['u06','??? Last Signal','???',148000,972000,'kingreach','leviathan','#742544','#ff5d83',0.82],
 ['u07','??? Unwritten King','???',100000,1044000,'kingreach','leviathan','#742544','#ff5d83',0.99],
 ['u08','??? Deep Silence','???',112000,1116000,'kingreach','leviathan','#742544','#ff5d83',1.16],
 ['u09','??? Broken Star','???',124000,1188000,'kingreach','leviathan','#742544','#ff5d83',1.33],
 ['u10','??? Final Omen','???',136000,1260000,'kingreach','leviathan','#742544','#ff5d83',1.50],
 ['k01','King of the Abyss','King',592000,3700000,'kingreach','leviathan','#742544','#ff5d83',1.67]
];
export const FISH = freeze(Object.assign(Object.create(null),Object.fromEntries(rows.map(([id,name,rarity,minGrams,maxGrams,islandId,family,color,accent,girth]) => [id,{id,name,rarity,minGrams,maxGrams,islandId,visual:{family,color,accent,girth}}]))));
export const getFish = id => FISH[id] ?? null;
export const speciesForIsland = id => Object.values(FISH).filter(fish => fish.islandId === id);

/** Inclusive minimum, exclusive RNG upper endpoint; tolerate custom RNG returning 1. */
export function sampleFish(islandId, rodId = 'starter', rng = Math.random) {
  if (!ISLANDS[islandId]) throw new RangeError('Unknown island');
  const rod = RODS[rodId];
  if (!rod) throw new RangeError('Unknown rod');
  const draw = () => { const n = Number(rng()); return Math.min(1-Number.EPSILON,Math.max(0,Number.isFinite(n)?n:0.5)); };
  const available = speciesForIsland(islandId);
  const tiers = Object.entries(RARITIES).filter(([rarity]) => available.some(f => f.rarity === rarity));
  const weights = tiers.map(([rarity,meta]) => meta.weight * (rarity === 'Normal' ? 1 : rod.luck));
  let cursor = draw() * weights.reduce((a,b) => a+b,0);
  let tier = tiers.at(-1)[0];
  for (let index=0;index<tiers.length;index++) { cursor -= weights[index]; if (cursor < 0) { tier=tiers[index][0]; break; } }
  const choices=available.filter(f => f.rarity === tier);
  const fish=choices[Math.min(choices.length-1,Math.floor(draw()*choices.length))];
  return {speciesId:fish.id,weightGrams:fish.minGrams+Math.floor(draw()*(fish.maxGrams-fish.minGrams+1)),islandId};
}
