(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{355:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n(2),o=n(5),i=n(69),c=n(27),p=n(160),s=n(4);var l="get_your_own_D6rA4zTHduk6KOKTXzGB",u=new o.a({source:new c.a({url:"https://api.maptiler.com/tiles/terrain-rgb/{z}/{x}/{y}.png?key="+l,maxZoom:10,crossOrigin:""})});u.on("prerender",(function(e){e.context.imageSmoothingEnabled=!1,e.context.msImageSmoothingEnabled=!1}));var m=new p.a({sources:[u],operation:function(e,t){var n=e[0];return n[3]&&(.1*(256*n[0]*256+256*n[1]+n[2])-1e4<=t.level?(n[0]=134,n[1]=203,n[2]=249,n[3]=255):n[3]=0),n}}),g=new a.a({target:"map",layers:[new o.a({source:new c.a({attributions:'<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',url:"https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key="+l,tileSize:512})}),new i.a({opacity:.6,source:m})],view:new r.a({center:Object(s.g)([-122.3267,37.8377]),zoom:11})}),w=document.getElementById("level"),d=document.getElementById("output");w.addEventListener("input",(function(){d.innerText=w.value,m.changed()})),d.innerText=w.value,m.on("beforeoperations",(function(e){e.data.level=w.value}));for(var v=document.getElementsByClassName("location"),b=0,y=v.length;b<y;++b)v[b].addEventListener("click",h);function h(e){var t=e.target.dataset,n=g.getView();n.setCenter(Object(s.g)(t.center.split(",").map(Number))),n.setZoom(Number(t.zoom))}}},[[355,0]]]);
//# sourceMappingURL=sea-level.js.map