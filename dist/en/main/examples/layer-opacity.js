"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2176],{30168:function(e,t,n){var a=n(68444),c=n(96480),o=n(95319),i=n(86728),r=n(70596);const s=new o.c({className:"ol-layer-imagery",source:new r.c({attributions:'<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> ',url:"https://api.maptiler.com/tiles/satellite/{z}/{x}/{y}.jpg?key=get_your_own_D6rA4zTHduk6KOKTXzGB",maxZoom:20,crossOrigin:""})}),p=new o.c({source:new c.c}),u=(new a.c({layers:[s,p],target:"map",view:new i.cp({center:[0,0],zoom:2})}),document.getElementById("opacity-input")),l=document.getElementById("opacity-output");function m(){const e=parseFloat(u.value);p.setOpacity(e),l.innerText=e.toFixed(2)}u.addEventListener("input",m),m()}},function(e){var t;t=30168,e(e.s=t)}]);
//# sourceMappingURL=layer-opacity.js.map