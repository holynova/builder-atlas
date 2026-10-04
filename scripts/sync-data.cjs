const fs=require('node:fs'),path=require('node:path');
const d=path.join(__dirname,'../dist');
const read=n=>JSON.parse(fs.readFileSync(path.join(d,n),'utf8'));
const write=(n,v)=>fs.writeFileSync(path.join(d,n),v);
const r=read('research.json'),l=read('learning.json'),x=read('x-insights.json');
write('data.js','const BUILDERS = '+JSON.stringify(r.builders,null,2)+';\n');
write('learning.js',"'use strict';\n// Editorial learning aids, not quotations.\n"+[['LEARNING',l.questionsAndExercises],['LEARNING_IDEAS',l.conciseParaphrases],['ROUTES',l.routes]].map(([n,v])=>'const '+n+' = '+JSON.stringify(v,null,2)+';').join('\n')+'\n');
write('x-insights.js',"'use strict';\nconst X_INSIGHTS = "+JSON.stringify(x,null,2)+';\n');
