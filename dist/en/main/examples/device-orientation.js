"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7632],{73492:function(e,n,t){var a=t(68444),r=t(96480),o=t(80372),c=t(86728),s=t(31272);const i=new c.cp({center:[0,0],zoom:2});new a.c({layers:[new o.c({source:new r.c})],target:"map",view:i});function u(e){return document.getElementById(e)}const m=new GyroNorm;m.init().then((function(){m.start((function(e){const n=i.getCenter(),t=i.getResolution(),a=(0,s.qW)(e.do.alpha),r=(0,s.qW)(e.do.beta),o=(0,s.qW)(e.do.gamma);u("alpha").innerText=a+" [rad]",u("beta").innerText=r+" [rad]",u("gamma").innerText=o+" [rad]",n[0]-=t*o*25,n[1]+=t*r*25,i.setCenter(n)}))}))}},function(e){var n;n=73492,e(e.s=n)}]);
//# sourceMappingURL=device-orientation.js.map