"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2678],{73281:function(e,t,n){var r=n(49208),o=n(41564),s=n(87240),a=n(29810),u=n(28e3),c=n(23986),f=n(12185),i=n(28487);const w=new a.A;fetch("data/geojson/roads-seoul.geojson").then((function(e){return e.json()})).then((function(e){const t=new r.A,n=t.readFeatures(e)[0],o=t.writeFeatureObject(n),s=turf.lineDistance(o,"kilometers");for(let e=1;e<=s/.2;e++){const n=turf.along(o,.2*e,"kilometers"),r=t.readFeature(n);r.getGeometry().transform("EPSG:4326","EPSG:3857"),w.addFeature(r)}n.getGeometry().transform("EPSG:4326","EPSG:3857"),w.addFeature(n)}));const d=new c.A({source:w}),l=new f.A({source:new u.A});new o.A({layers:[l,d],target:document.getElementById("map"),view:new s.Ay({center:(0,i.Rb)([126.980366,37.52654]),zoom:15})})}},function(e){var t;t=73281,e(e.s=t)}]);
//# sourceMappingURL=turf.js.map