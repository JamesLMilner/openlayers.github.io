"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6260],{83615:function(e,t,n){var o=n(30135),r=n(41564),i=n(9226),a=n(29810),l=n(87240),s=n(88292),c=n(21133),u=n(38276),g=n(44689),f=n(23986),p=n(12185);const w={},d=new f.A({source:new a.A({url:"data/kml/2012_Earthquakes_Mag5.kml",format:new o.Ay({extractStyles:!1})}),style:function(e){const t=e.get("name"),n=5+20*(parseFloat(t.substr(2))-5);let o=w[n];return o||(o=new s.Ay({image:new c.A({radius:n,fill:new u.A({color:"rgba(255, 153, 0, 0.4)"}),stroke:new g.A({color:"rgba(255, 204, 0, 0.2)",width:1})})}),w[n]=o),o}}),m=new p.A({source:new i.A({layer:"stamen_toner"})}),v=new r.A({layers:[m,d],target:"map",view:new l.Ay({center:[0,0],zoom:2})}),A=document.getElementById("info");A.style.pointerEvents="none";const y=new bootstrap.Tooltip(A,{animation:!1,customClass:"pe-none",offset:[0,5],title:"-",trigger:"manual"});let h;const E=function(e,t){const n=t.closest(".ol-control")?void 0:v.forEachFeatureAtPixel(e,(function(e){return e}));n?(A.style.left=e[0]+"px",A.style.top=e[1]+"px",n!==h&&y.setContent({".tooltip-inner":n.get("name")}),h?y.update():y.show()):y.hide(),h=n};v.on("pointermove",(function(e){if(e.dragging)return y.hide(),void(h=void 0);const t=v.getEventPixel(e.originalEvent);E(t,e.originalEvent.target)})),v.on("click",(function(e){E(e.pixel,e.originalEvent.target)})),v.getTargetElement().addEventListener("pointerleave",(function(){y.hide(),h=void 0}))}},function(e){var t;t=83615,e(e.s=t)}]);
//# sourceMappingURL=kml-earthquakes.js.map