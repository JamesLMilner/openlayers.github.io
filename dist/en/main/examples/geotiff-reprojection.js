"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2122],{56056:function(e,n,t){var a=t(93624),r=t(68444),o=t(95319),s=t(86728);const c=["red","green","blue"];for(const e of c){document.getElementById(e).addEventListener("change",d);document.getElementById(`${e}Max`).addEventListener("input",d)}function l(){const e={};for(const n of c){const t=document.getElementById(n);e[n]=parseInt(t.value,10);const a=`${n}Max`,r=document.getElementById(a);e[a]=parseInt(r.value,10)}return e}const u=new o.c({style:{variables:l(),color:["array",["/",["band",["var","red"]],["var","redMax"]],["/",["band",["var","green"]],["var","greenMax"]],["/",["band",["var","blue"]],["var","blueMax"]],1]},source:new a.c({normalize:!1,sources:[{url:"https://s2downloads.eox.at/demo/EOxCloudless/2020/rgbnir/s2cloudless2020-16bits_sinlge-file_z0-4.tif"}],wrapX:!0})});function d(){u.updateStyleVariables(l())}new r.c({target:"map",layers:[u],view:new s.cp({center:[0,0],zoom:2,maxZoom:6})})}},function(e){var n;n=56056,e(e.s=n)}]);
//# sourceMappingURL=geotiff-reprojection.js.map