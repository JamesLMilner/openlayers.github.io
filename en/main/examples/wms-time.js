(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{401:function(e,n,t){"use strict";t.r(n);var a=t(3),r=t(63),i=t(5),o=t(68),u=t(2),c=t(1),s=t(4);function w(){return new Date(36e5*Math.round(Date.now()/36e5)-108e5)}var d=Object(s.t)([-126,24,-66,50],"EPSG:4326","EPSG:3857"),l=w(),m=null,g=[new i.a({source:new r.a({layer:"terrain"})}),new i.a({extent:d,source:new o.a({attributions:["Iowa State University"],url:"https://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r-t.cgi",params:{LAYERS:"nexrad-n0r-wmst"}})})];new a.a({layers:g,target:"map",view:new u.a({center:Object(c.y)(d),zoom:4})});function p(){document.getElementById("info").innerHTML=l.toISOString()}function v(){l.setMinutes(l.getMinutes()+15),l>new Date&&(l=w()),g[1].getSource().updateParams({TIME:l.toISOString()}),p()}v();var E=function(){null!==m&&(window.clearInterval(m),m=null)};document.getElementById("play").addEventListener("click",(function(){E(),m=window.setInterval(v,2e3)}),!1),document.getElementById("pause").addEventListener("click",E,!1),p()}},[[401,0]]]);
//# sourceMappingURL=wms-time.js.map