"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8066],{3485:function(e,n,t){var o=t(41564),a=t(12185),c=t(87240),s=t(55238);const l="pk.eyJ1IjoiYWhvY2V2YXIiLCJhIjoiY2t0cGdwMHVnMGdlbzMxbDhwazBic2xrNSJ9.WbcTL9uj8JPAsnT9mgb7oQ",b="https://{a-c}.tiles.mapbox.com/v4",p=[b+"/mapbox.blue-marble-topo-jan/{z}/{x}/{y}.png?access_token="+l,b+"/mapbox.blue-marble-topo-bathy-jan/{z}/{x}/{y}.png?access_token="+l,b+"/mapbox.blue-marble-topo-jul/{z}/{x}/{y}.png?access_token="+l,b+"/mapbox.blue-marble-topo-bathy-jul/{z}/{x}/{y}.png?access_token="+l],u=new s.A;new o.A({target:"map",layers:[new a.A({source:u})],view:new c.Ay({center:[0,0],zoom:2})});function m(e){u.setUrl(p[e])}const r=document.getElementsByClassName("switcher");for(let e=0,n=r.length;e<n;++e){const n=r[e];n.addEventListener("click",m.bind(null,Number(n.value)))}m(0)}},function(e){var n;n=3485,e(e.s=n)}]);
//# sourceMappingURL=reusable-source.js.map