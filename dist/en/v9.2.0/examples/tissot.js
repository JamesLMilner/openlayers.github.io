"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4437],{52656:function(e,r,n){var o=n(51541),a=n(41564),s=n(6848),t=n(29810),c=n(87240),w=n(23986),u=n(12185),A=n(30470);const m=new w.A({source:new t.A}),p=new w.A({source:new t.A});new a.A({layers:[new u.A({source:new s.A({url:"https://ahocevar.com/geoserver/wms",params:{LAYERS:"ne:NE1_HR_LC_SR_W_DR",TILED:!0}})}),m],target:"map4326",view:new c.Ay({projection:"EPSG:4326",center:[0,0],zoom:2})}),new a.A({layers:[new u.A({source:new s.A({url:"https://ahocevar.com/geoserver/wms",params:{LAYERS:"ne:NE1_HR_LC_SR_W_DR",TILED:!0}})}),p],target:"map3857",view:new c.Ay({center:[0,0],zoom:2})});let _,E;for(_=-180;_<180;_+=30)for(E=-90;E<=90;E+=30){const e=(0,A.kj)([_,E],8e5,64),r=e.clone().transform("EPSG:4326","EPSG:3857");m.getSource().addFeature(new o.A(e)),p.getSource().addFeature(new o.A(r))}}},function(e){var r;r=52656,e(e.s=r)}]);
//# sourceMappingURL=tissot.js.map