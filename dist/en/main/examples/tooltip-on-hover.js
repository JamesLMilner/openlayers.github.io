"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3290],{20028:function(e,t,n){var i=n(37080),o=n(68444),l=n(2064),r=n(17256),s=n(86728);const c=new l.c({source:new r.c({url:"https://openlayers.org/data/vector/ecoregions.json",format:new i.c}),background:"white",style:{"fill-color":["string",["get","COLOR"],"#eeeeee"]}}),a=new o.c({layers:[c],target:"map",view:new s.cp({center:[0,0],zoom:2})}),v=document.getElementById("info");let g;const u=function(e,t){const n=t.closest(".ol-control")?void 0:a.forEachFeatureAtPixel(e,(function(e){return e}));n?(v.style.left=e[0]+"px",v.style.top=e[1]+"px",n!==g&&(v.style.visibility="visible",v.innerText=n.get("ECO_NAME"))):v.style.visibility="hidden",g=n};a.on("pointermove",(function(e){if(e.dragging)return v.style.visibility="hidden",void(g=void 0);const t=a.getEventPixel(e.originalEvent);u(t,e.originalEvent.target)})),a.on("click",(function(e){u(e.pixel,e.originalEvent.target)})),a.getTargetElement().addEventListener("pointerleave",(function(){g=void 0,v.style.visibility="hidden"}))}},function(e){var t;t=20028,e(e.s=t)}]);
//# sourceMappingURL=tooltip-on-hover.js.map