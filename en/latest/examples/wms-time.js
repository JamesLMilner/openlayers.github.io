(self.webpackChunk=self.webpackChunk||[]).push([[6762],{4852:function(n,e,t){"use strict";var a=t(1625),r=t(2157),i=t(7842),u=t(6942),c=t(640),o=t(6666);function s(){return new Date(36e5*Math.round(Date.now()/36e5)-108e5)}var w=(0,t(4589).$A)([-126,24,-66,50],"EPSG:4326","EPSG:3857"),l=s(),f=null,m=[new i.Z({source:new r.Z({layer:"terrain"})}),new i.Z({extent:w,source:new u.Z({attributions:["Iowa State University"],url:"https://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r-t.cgi",params:{LAYERS:"nexrad-n0r-wmst"}})})];new a.Z({layers:m,target:"map",view:new c.ZP({center:(0,o.qg)(w),zoom:4})});function d(){document.getElementById("info").innerHTML=l.toISOString()}function v(){l.setMinutes(l.getMinutes()+15),l>Date.now()&&(l=s()),m[1].getSource().updateParams({TIME:l.toISOString()}),d()}v();var p=function(){null!==f&&(window.clearInterval(f),f=null)};document.getElementById("play").addEventListener("click",(function(){p(),f=window.setInterval(v,2e3)}),!1),document.getElementById("pause").addEventListener("click",p,!1),d()}},function(n){"use strict";var e;e=4852,n(n.s=e)}]);
//# sourceMappingURL=wms-time.js.map