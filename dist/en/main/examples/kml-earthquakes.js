"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[668],{67864:function(e,t,n){var o=n(8e4),r=n(68444),i=n(80652),a=n(17256),c=n(86728),l=n(65732),s=n(76252),u=n(1999),g=n(51144),p=n(2064),f=n(80372);const w={},d=new p.c({source:new a.c({url:"data/kml/2012_Earthquakes_Mag5.kml",format:new o.cp({extractStyles:!1})}),style:function(e){const t=e.get("name"),n=5+20*(parseFloat(t.substr(2))-5);let o=w[n];return o||(o=new l.cp({image:new s.c({radius:n,fill:new u.c({color:"rgba(255, 153, 0, 0.4)"}),stroke:new g.c({color:"rgba(255, 204, 0, 0.2)",width:1})})}),w[n]=o),o}}),m=new f.c({source:new i.c({layer:"stamen_toner"})}),v=new r.c({layers:[m,d],target:"map",view:new c.cp({center:[0,0],zoom:2})}),h=document.getElementById("info");h.style.pointerEvents="none";const E=new bootstrap.Tooltip(h,{animation:!1,customClass:"pe-none",offset:[0,5],title:"-",trigger:"manual"});let k;const y=function(e,t){const n=t.closest(".ol-control")?void 0:v.forEachFeatureAtPixel(e,(function(e){return e}));n?(h.style.left=e[0]+"px",h.style.top=e[1]+"px",n!==k&&E.setContent({".tooltip-inner":n.get("name")}),k?E.update():E.show()):E.hide(),k=n};v.on("pointermove",(function(e){if(e.dragging)return E.hide(),void(k=void 0);const t=v.getEventPixel(e.originalEvent);y(t,e.originalEvent.target)})),v.on("click",(function(e){y(e.pixel,e.originalEvent.target)})),v.getTargetElement().addEventListener("pointerleave",(function(){E.hide(),k=void 0}))}},function(e){var t;t=67864,e(e.s=t)}]);
//# sourceMappingURL=kml-earthquakes.js.map