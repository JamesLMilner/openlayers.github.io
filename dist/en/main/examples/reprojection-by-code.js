"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4447],{45026:function(e,n,t){var o=t(43357),i=t(41564),s=t(28e3),c=t(44689),l=t(64618),r=t(12185),u=t(87240),d=t(56770),g=t(16235),a=t(28487),h=t(76582);const f=new s.A,w=new r.A({source:new l.A({tileGrid:f.getTileGrid(),projection:f.getProjection()}),visible:!1}),m=new o.A({strokeStyle:new c.A({color:"rgba(255,120,0,0.9)",width:2,lineDash:[.5,4]}),showLabels:!0,visible:!1,wrapX:!1}),E=new i.A({layers:[new r.A({source:f}),w,m],target:"map",view:new u.Ay({projection:"EPSG:3857",center:[0,0],zoom:1})}),p=document.getElementById("epsg-query"),v=document.getElementById("epsg-search"),y=document.getElementById("epsg-result"),A=document.getElementById("render-edges"),b=document.getElementById("show-tiles"),k=document.getElementById("show-graticule");function j(e,n,t,o){if(null===e||null===n||null===t||null===o)return y.innerHTML="Nothing usable found, using EPSG:3857...",void E.setView(new u.Ay({projection:"EPSG:3857",center:[0,0],zoom:1}));y.innerHTML="("+e+") "+n;const i="EPSG:"+e;d.A.defs(i,t),(0,h.kz)(d.A);const s=(0,a.Jt)(i),c=(0,a.RG)("EPSG:4326",s);let l=[o[1],o[2],o[3],o[0]];s.setWorldExtent(l),o[1]>o[3]&&(l=[o[1],o[2],o[3]+360,o[0]]);const r=(0,g.NW)(l,c,void 0,8);s.setExtent(r);const f=new u.Ay({projection:s});E.setView(f),f.fit(r)}function G(){f.setRenderReprojectionEdges(A.checked)}function L(){m.setVisible(k.checked)}function S(){w.setVisible(b.checked)}v.onclick=function(e){var n;n=p.value,y.innerHTML="Searching ...",fetch("https://epsg.io/?format=json&q="+n).then((function(e){return e.json()})).then((function(e){const n=e.results;if(n&&n.length>0)for(let e=0,t=n.length;e<t;e++){const t=n[e];if(t){const e=t.code,n=t.name,o=t.wkt,i=t.bbox;if(e&&e.length>0&&o&&o.length>0&&i&&4==i.length)return void j(e,n,o,i)}}j(null,null,null,null)})),e.preventDefault()},k.addEventListener("change",L),A.addEventListener("change",G),b.addEventListener("change",S),G(),L(),S()}},function(e){var n;n=45026,e(e.s=n)}]);
//# sourceMappingURL=reprojection-by-code.js.map