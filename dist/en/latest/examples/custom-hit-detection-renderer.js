"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4632],{37523:function(e,t,l){var o=l(51541),r=l(41564),n=l(87240),a=l(92198),s=l(28e3),c=l(29810),i=l(88292),b=l(12185),d=l(23986);const p=(0,l(28487).Rb)([-73.98189,40.76805]),g="rgba(120, 120, 120, 1)",u="Columbus Circle";let w=null;const f=(e,t,l,o)=>{e.fillStyle="rgba(255,0,0,1)",e.strokeStyle=o,e.lineWidth=1,e.textAlign="center",e.textBaseline="middle",e.font="bold 30px verdana",e.filter="drop-shadow(7px 7px 2px #e81)",e.fillText(u,t,l),e.strokeText(u,t,l)},x=new o.A({geometry:new a.A(p,50)});x.set("label-color",g),x.setStyle(new i.Ay({renderer(e,t){const[[l,o],[r,n]]=e,a=t.context,s=r-l,c=n-o,i=Math.sqrt(s*s+c*c),b=1.4*i,d=a.createRadialGradient(l,o,0,l,o,b);d.addColorStop(0,"rgba(255,0,0,0)"),d.addColorStop(.6,"rgba(255,0,0,0.2)"),d.addColorStop(1,"rgba(255,0,0,0.8)"),a.beginPath(),a.arc(l,o,i,0,2*Math.PI,!0),a.fillStyle=d,a.fill(),a.strokeStyle="rgba(255,0,0,1)",a.stroke(),f(a,l,o,x.get("label-color"))},hitDetectionRenderer(e,t){const[l,o]=e[0],r=t.context;f(r,l,o,x.get("label-color"))}}));const A=new r.A({layers:[new b.A({source:new s.A,visible:!0}),new d.A({source:new c.A({features:[x]})})],target:"map",view:new n.Ay({center:p,zoom:19})});A.on("pointermove",(e=>{const t=A.forEachFeatureAtPixel(e.pixel,(e=>(e.set("label-color","rgba(255,255,255,1)"),e)));w&&w!=t&&w.set("label-color",g),w=t}))}},function(e){var t;t=37523,e(e.s=t)}]);
//# sourceMappingURL=custom-hit-detection-renderer.js.map