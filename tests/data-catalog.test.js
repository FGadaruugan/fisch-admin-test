import test from 'node:test';
import assert from 'node:assert/strict';
import {FISH,ISLANDS,RARITIES,RODS,speciesForIsland} from '../js/data.js';
import {fishPrice} from '../js/progression.js';

test('V1.0.0 catalogue contains 100 unique fish and seven islands',()=>{
  assert.equal(Object.keys(FISH).length,100);
  assert.equal(new Set(Object.keys(FISH)).size,100);
  assert.equal(Object.keys(ISLANDS).length,7);
  for(const fish of Object.values(FISH)){
    assert.ok(ISLANDS[fish.islandId],`unknown island for ${fish.id}`);
    assert.ok(RARITIES[fish.rarity],`unknown rarity for ${fish.id}`);
    assert.ok(fish.minGrams>0&&fish.maxGrams>=fish.minGrams,`invalid weight range for ${fish.id}`);
  }
});

test('three new islands and final-island collection counts match the update target',()=>{
  assert.equal(speciesForIsland('ember').length,5);
  assert.equal(speciesForIsland('moonfall').length,5);
  assert.equal(speciesForIsland('kingreach').length,60);
  assert.equal(speciesForIsland('kingreach').filter(f=>f.rarity==='???').length,8);
  assert.equal(speciesForIsland('kingreach').filter(f=>f.rarity==='King').length,1);
});

test('ten new rods are split into seven Rare and three Legendary',()=>{
  const added=Object.values(RODS).filter(rod=>rod.rarity);
  assert.equal(added.length,10);
  assert.equal(added.filter(rod=>rod.rarity==='Rare').length,7);
  assert.equal(added.filter(rod=>rod.rarity==='Legendary').length,3);
  for(const rod of added)assert.ok(rod.price>0&&rod.width>0&&rod.luck>0, `invalid rod stats: ${rod.id}`);
});

test('King fish has valid rarity data and can be priced',()=>{
  const king=FISH.k01;
  assert.equal(king.rarity,'King');
  assert.ok(RARITIES.King.xp>RARITIES.Legendary.xp);
  assert.ok(fishPrice({speciesId:king.id,weightGrams:king.minGrams})>0);
});
