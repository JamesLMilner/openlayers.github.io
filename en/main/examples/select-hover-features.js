(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{357:function(e,n,o){"use strict";o.r(n);var t=o(21),a=o(31),r=o(3),s=o(9),w=o(17),l=o(10),i=o(11),u=o(2),c=o(5),p=o(20),d=new c.a({source:new s.b}),g=new l.c({fill:new t.a({color:"rgba(255,255,255,0.7)"}),stroke:new w.a({color:"#3399CC",width:3})}),m=new p.a({source:new i.a({url:"data/geojson/countries.geojson",format:new a.a})}),b=new r.a({layers:[d,m],target:"map",view:new u.a({center:[0,0],zoom:2})}),f=null,v=document.getElementById("status");b.on("pointermove",(function(e){null!==f&&(f.setStyle(void 0),f=null),b.forEachFeatureAtPixel(e.pixel,(function(e){return f=e,e.setStyle(g),!0})),v.innerHTML=f?"&nbsp;Hovering: "+f.get("name"):"&nbsp;"}))}},[[357,0]]]);
//# sourceMappingURL=select-hover-features.js.map