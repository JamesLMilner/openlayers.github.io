"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8099],{7646:function(e,t,a){var n=a(8993),r=a(1055),o=a(463),u=a(824),l=a(1625);const i=e=>["interpolate",["linear"],["band",e],["var","bMin"],0,["var","bMax"],1],s=3e3,c=18e3,d=new o.Z({style:{color:["array",i(3),i(2),i(1),["band",5]],variables:{bMin:s,bMax:c}},source:new n.Z({loader:function(e,t,a){const n=`https://api.cogeo.xyz/cog/tiles/WebMercatorQuad/${e}/${t}/${a}@1x?format=npy&url=${encodeURIComponent("https://storage.googleapis.com/open-cogs/stac-examples/20201211_223832_CS2_analytic.tif")}`;return fetch(n).then((e=>e.arrayBuffer())).then((e=>NumpyLoader.fromArrayBuffer(e))).then((e=>{const t=new Float32Array(327680),a=65536;for(let n=0;n<256;n++)for(let r=0;r<256;r++){const o=n+256*r;t[5*o+0]=e.data[256*r+n],t[5*o+1]=e.data[a+256*r+n],t[5*o+2]=e.data[131072+256*r+n],t[5*o+3]=e.data[196608+256*r+n],t[5*o+4]=e.data[262144+256*r+n]>0?1:0}return t}))},bandCount:5})}),p=(new r.Z({target:"map",layers:[d],view:new u.ZP({center:(0,l.mi)([172.933,1.3567]),zoom:15})}),document.getElementById("input-min")),m=document.getElementById("input-max"),b=document.getElementById("output-min"),v=document.getElementById("output-max");p.addEventListener("input",(e=>{d.updateStyleVariables({bMin:parseFloat(e.target.value),bMax:parseFloat(m.value)}),b.innerText=e.target.value})),m.addEventListener("input",(e=>{d.updateStyleVariables({bMin:parseFloat(p.value),bMax:parseFloat(e.target.value)}),v.innerText=e.target.value})),p.value=s,m.value=c,b.innerText=s,v.innerText=c}},function(e){var t;t=7646,e(e.s=t)}]);
//# sourceMappingURL=numpytile.js.map