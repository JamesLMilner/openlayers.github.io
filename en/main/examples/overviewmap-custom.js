"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4871],{7363:function(e,t,n){var c=n(1376),a=n(9847),o=n(2010),s=n(4354),r=n(4894),l=n(6505),i=n(2021),u=n(5830),w=document.getElementById("rotateWithView"),d=new i.Z({className:"ol-overviewmap ol-custom-overviewmap",layers:[new o.Z({source:new a.Z({url:"https://{a-c}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=0e6fc415256d4fbb9b5166a718591d71"})})],collapseLabel:"»",label:"«",collapsed:!1});w.addEventListener("change",(function(){d.setRotateWithView(this.checked)}));new c.Z({controls:(0,u.ce)().extend([d]),interactions:(0,r.ce)().extend([new l.Z]),layers:[new o.Z({source:new a.Z})],target:"map",view:new s.ZP({center:[5e5,6e6],zoom:7})})}},function(e){var t=function(t){return e(e.s=t)};t(9877),t(7363)}]);
//# sourceMappingURL=overviewmap-custom.js.map