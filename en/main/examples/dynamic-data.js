(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{261:function(e,a,r){"use strict";r.r(a);var n=r(3),t=r(9),w=r(5),o=r(2),s=r(10),i=r(52),l=r(21),c=r(17),d=r(73),h=r(26),m=r(46),u=new w.a({source:new t.b}),p=new n.a({layers:[u],target:"map",view:new o.a({center:[0,0],zoom:2})}),y=new s.c({image:new i.a({radius:5,fill:new l.a({color:"yellow"}),stroke:new c.a({color:"red",width:1})})}),b=new s.c({image:new i.a({radius:2,fill:new l.a({color:"blue"})})}),f=new s.c({image:new i.a({radius:5,fill:new l.a({color:"black"})})}),M=7e6,g=2e6,v=2e6;u.on("postrender",(function(e){var a,r=Object(m.b)(e),n=e.frameState,t=2*Math.PI*n.time/3e4,w=[];for(a=0;a<200;++a){var o=t+2*Math.PI*a/200,s=(M+g)*Math.cos(o)+v*Math.cos((M+g)*o/g),i=(M+g)*Math.sin(o)+v*Math.sin((M+g)*o/g);w.push([s,i])}r.setStyle(y),r.drawGeometry(new d.a(w));var l=new h.a(w[w.length-1]);r.setStyle(f),r.drawGeometry(l),r.setStyle(b),r.drawGeometry(l),p.render()})),p.render()}},[[261,0]]]);
//# sourceMappingURL=dynamic-data.js.map