"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6628],{61480:function(e,t,n){var a=n(8e4),r=n(68444),u=n(80652),s=n(17256),c=n(86728),l=n(38128),o=n(80372);const i=document.getElementById("blur"),p=document.getElementById("radius"),d=new l.c({source:new s.c({url:"data/kml/2012_Earthquakes_Mag5.kml",format:new a.cp({extractStyles:!1})}),blur:parseInt(i.value,10),radius:parseInt(p.value,10),weight:function(e){const t=e.get("name");return parseFloat(t.substr(2))-5}}),m=new o.c({source:new u.c({layer:"stamen_toner"})});new r.c({layers:[m,d],target:"map",view:new c.cp({center:[0,0],zoom:2})}),i.addEventListener("input",(function(){d.setBlur(parseInt(i.value,10))})),p.addEventListener("input",(function(){d.setRadius(parseInt(p.value,10))}))}},function(e){var t;t=61480,e(e.s=t)}]);
//# sourceMappingURL=heatmap-earthquakes.js.map