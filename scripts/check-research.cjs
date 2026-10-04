const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict'),vm=require('node:vm');
const d=path.join(__dirname,'../dist');const read=n=>JSON.parse(fs.readFileSync(path.join(d,n),'utf8'));
const r=read('research.json'),l=read('learning.json'),x=read('x-insights.json');
assert.equal(r.builders.length,30);assert.equal(new Set(r.builders.map(p=>p.id)).size,30);
assert.equal(r.builders.filter(p=>p.researchStatus==='reviewed').length,4);
assert.equal(r.builders.filter(p=>p.researchStatus==='todo').length,26);
for(const p of r.builders){
 assert.ok(['reviewed','todo'].includes(p.researchStatus));
 if(p.researchStatus==='todo'){assert.equal(p.ideas.length,0);assert.match(p.thesis,/TODO/);continue}
 assert.equal(l.conciseParaphrases[p.id].length,p.ideas.length);
 for(const i of p.ideas){assert.ok(i.sourceIndices.length);assert.ok(i.representativeness);assert.ok(i.boundary);for(const n of i.sourceIndices){const w=p.works[n];assert.ok(w,p.id+': broken source index');assert.ok(w.locator);assert.ok(w.access);assert.ok(w.reviewedAt);assert.ok(new URL(w.url))}}
 assert.ok(fs.existsSync(path.join(__dirname,'../research',p.id+'.md')));
}
for(const route of l.routes)for(const id of route.ids)assert.equal(r.builders.find(p=>p.id===id)?.researchStatus,'reviewed');
const c={};vm.createContext(c);vm.runInContext(fs.readFileSync(path.join(d,'data.js'),'utf8')+';this.value=BUILDERS',c);assert.equal(JSON.stringify(c.value),JSON.stringify(r.builders));
for(const b of x.profiles){for(const i of (b.insights||[])){assert.deepEqual(i.ids,i.sources.map(s=>s.id));assert.ok(i.sources.length)}}
console.log('Research checks: 4 reviewed, 26 TODO, source bindings and current reading routes valid.');
