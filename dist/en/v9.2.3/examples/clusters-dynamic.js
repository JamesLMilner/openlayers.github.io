"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[42],{67941:function(e,t,n){var o=n(51541),r=n(49208),a=n(41564),s=n(87240),i=n(38276),g=n(44689),l=n(21133),u=n(75052),c=n(88292),w=n(59194),f=n(29810),m=n(28227),h=n(55238),A=n(40878),p=n(77833),y=n(30470),d=n(23986),b=n(12185),x=n(16235),v=n(28487);const k=1,C=28,G=Math.PI/2,M=new i.A({color:"rgba(255, 153, 0, 0.4)"}),S=new g.A({color:"rgba(204, 85, 0, 1)",width:1.5}),E=new i.A({color:"rgba(255, 153, 102, 0.3)"}),I=new i.A({color:"rgba(255, 165, 0, 0.7)"}),P=new i.A({color:"#fff"}),R=new g.A({color:"rgba(0, 0, 0, 0.6)",width:3}),F=new l.A({radius:14,fill:I}),Z=new l.A({radius:20,fill:E}),j=new u.A({src:"data/icons/emoticon-cool.svg"}),z=new u.A({src:"data/icons/emoticon-cool-outline.svg"});function T(e){return new c.Ay({geometry:e.getGeometry(),image:e.get("LEISTUNG")>5?j:z})}let V,q,B;function D(e,t){if(e!==V||t!==q)return null;const n=e.get("features"),r=e.getGeometry().getCoordinates();return function(e,t,n){let o=k*C*(2+e)/(2*Math.PI);const r=2*Math.PI/e,a=[];let s;o=Math.max(o,35)*n;for(let n=0;n<e;++n)s=G+n*r,a.push([t[0]+o*Math.cos(s),t[1]+o*Math.sin(s)]);return a}(n.length,e.getGeometry().getCoordinates(),t).reduce(((e,t,a)=>{const s=new A.A(t),i=new p.A([r,t]);return e.unshift(new c.Ay({geometry:i,stroke:S})),e.push(T(new o.A({...n[a].getProperties(),geometry:s}))),e}),[])}function H(e){if(e!==B)return null;const t=e.get("features").map((e=>e.getGeometry().getCoordinates()));return new c.Ay({geometry:new y.Ay([monotoneChainConvexHull(t)]),fill:M,stroke:S})}const L=new f.A({format:new r.A,url:"data/geojson/photovoltaic.json"}),N=new m.A({attributions:'Data: <a href="https://www.data.gv.at/auftritte/?organisation=stadt-wien">Stadt Wien</a>',distance:35,source:L}),O=new d.A({source:N,style:H}),U=new d.A({source:N,style:function(e){const t=e.get("features").length;return t>1?[new c.Ay({image:Z}),new c.Ay({image:F,text:new w.A({text:t.toString(),fill:P,stroke:R})})]:T(e.get("features")[0])}}),W=new d.A({source:N,style:D}),X=new b.A({source:new h.A({attributions:'Base map: <a target="_blank" href="https://basemap.at/">basemap.at</a>',url:"https://maps{1-4}.wien.gv.at/basemap/bmapgrau/normal/google3857/{z}/{y}/{x}.png"})}),$=new a.A({layers:[X,O,U,W],target:"map",view:new s.Ay({center:[0,0],zoom:2,maxZoom:19,extent:[...(0,v.Rb)([16.1793,48.1124]),...(0,v.Rb)([16.5559,48.313])],showFullExtent:!0})});$.on("pointermove",(e=>{U.getFeatures(e.pixel).then((e=>{e[0]!==B&&(B=e[0],O.setStyle(H),$.getTargetElement().style.cursor=B&&B.get("features").length>1?"pointer":"")}))})),$.on("click",(e=>{U.getFeatures(e.pixel).then((e=>{if(e.length>0){const t=e[0].get("features");if(t.length>1){const n=(0,x.S5)();t.forEach((e=>(0,x.X$)(n,e.getGeometry().getExtent())));const o=$.getView(),r=$.getView().getResolution();o.getZoom()===o.getMaxZoom()||(0,x.RG)(n)<r&&(0,x.Oq)(n)<r?(V=e[0],q=r,W.setStyle(D)):o.fit(n,{duration:500,padding:[50,50,50,50]})}}}))}))}},function(e){var t;t=67941,e(e.s=t)}]);
//# sourceMappingURL=clusters-dynamic.js.map