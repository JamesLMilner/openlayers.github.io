"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5240],{60172:function(e,t,n){var o=n(19212),r=n(27472),a=n(68444),c=n(96480),i=n(17256),s=n(86728),l=n(65732),u=n(51144),d=n(76252),g=n(1999),w=n(38788),p=n(83880),f=n(2064),m=n(80372),h=n(77491);const y={"Clement Latour":"rgba(0, 0, 255, 0.7)","Damien de Baesnt":"rgba(0, 215, 255, 0.7)","Sylvain Dhonneur":"rgba(0, 165, 255, 0.7)","Tom Payne":"rgba(0, 255, 255, 0.7)","Ulrich Prinz":"rgba(0, 215, 255, 0.7)"},C={},b=new i.c,v=["data/igc/Clement-Latour.igc","data/igc/Damien-de-Baenst.igc","data/igc/Sylvain-Dhonneur.igc","data/igc/Tom-Payne.igc","data/igc/Ulrich-Prinz.igc"];function T(e,t){const n=new XMLHttpRequest;n.open("GET",e),n.onload=function(){t(n.responseText)},n.send()}const k=new r.c;for(let e=0;e<v.length;++e)T(v[e],(function(e){const t=k.readFeatures(e,{featureProjection:"EPSG:3857"});b.addFeatures(t)}));const L={start:1/0,stop:-1/0,duration:0};b.on("addfeature",(function(e){const t=e.feature.getGeometry();L.start=Math.min(L.start,t.getFirstCoordinate()[2]),L.stop=Math.max(L.stop,t.getLastCoordinate()[2]),L.duration=L.stop-L.start}));const P=new f.c({source:b,style:function(e){const t=y[e.get("PLT")];let n=C[t];return n||(n=new l.cp({stroke:new u.c({color:t,width:3})}),C[t]=n),n}}),E=new a.c({layers:[new m.c({source:new c.c({attributions:['All maps © <a href="https://www.opencyclemap.org/">OpenCycleMap</a>',c.C],url:"https://{a-c}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=0e6fc415256d4fbb9b5166a718591d71"})}),P],target:"map",view:new s.cp({center:[703365.7089403362,5714629.865071137],zoom:9})});let G=null,M=null;const F=function(e){const t=b.getClosestFeatureToCoordinate(e),n=document.getElementById("info");if(null===t)G=null,M=null,n.innerHTML="&nbsp;";else{const o=t.getGeometry().getClosestPoint(e);null===G?G=new w.c(o):G.setCoordinates(o);const r=new Date(1e3*o[2]);n.innerHTML=t.get("PLT")+" ("+r.toUTCString()+")";const a=[e,[o[0],o[1]]];null===M?M=new p.c(a):M.setCoordinates(a)}E.render()};E.on("pointermove",(function(e){if(e.dragging)return;const t=E.getEventCoordinate(e.originalEvent);F(t)})),E.on("click",(function(e){F(e.coordinate)}));const S=new u.c({color:"rgba(255,0,0,0.9)",width:1}),D=new l.cp({stroke:S,image:new d.c({radius:5,fill:null,stroke:S})});P.on("postrender",(function(e){const t=(0,h.wX)(e);t.setStyle(D),null!==G&&t.drawGeometry(G),null!==M&&t.drawGeometry(M)}));const z=new f.c({source:new i.c,map:E,style:new l.cp({image:new d.c({radius:5,fill:new g.c({color:"rgba(255,0,0,0.9)"})})})}),B=document.getElementById("time");B.addEventListener("input",(function(){const e=parseInt(B.value,10)/100,t=L.start+L.duration*e;b.forEachFeature((function(e){const n=e.getGeometry().getCoordinateAtM(t,!0);let r=e.get("highlight");void 0===r?(r=new o.c(new w.c(n)),e.set("highlight",r),z.getSource().addFeature(r)):r.getGeometry().setCoordinates(n)})),E.render()}))}},function(e){var t;t=60172,e(e.s=t)}]);
//# sourceMappingURL=igc.js.map