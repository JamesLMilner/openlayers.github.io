(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{395:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n(70),o=n(5),p=n(68),i=n(2),s=n(49),c=n(143),w=n(4),h=new r.a({code:"EPSG:21781",extent:[485869.5728,76443.1884,837076.5648,299941.7864],units:"m"});Object(w.c)(h),Object(w.a)("EPSG:4326",h,(function(e){return[g(e[1],e[0]),l(e[1],e[0])]}),(function(e){return[f(e[0],e[1]),b(e[0],e[1])]}));var u=[42e4,3e4,9e5,35e4],m=[new o.a({extent:u,source:new p.a({url:"https://wms.geo.admin.ch/",crossOrigin:"anonymous",attributions:'© <a href="http://www.geo.admin.ch/internet/geoportal/en/home.html">Pixelmap 1:1000000 / geo.admin.ch</a>',params:{LAYERS:"ch.swisstopo.pixelkarte-farbe-pk1000.noscale",FORMAT:"image/jpeg"},serverType:"mapserver"})}),new o.a({extent:u,source:new p.a({url:"https://wms.geo.admin.ch/",crossOrigin:"anonymous",attributions:'© <a href="http://www.geo.admin.ch/internet/geoportal/en/home.html">National parks / geo.admin.ch</a>',params:{LAYERS:"ch.bafu.schutzgebiete-paerke_nationaler_bedeutung"},serverType:"mapserver"})})];new a.a({controls:Object(s.a)().extend([new c.a({units:"metric"})]),layers:m,target:"map",view:new i.a({projection:h,center:Object(w.s)([8.23,46.86],"EPSG:4326","EPSG:21781"),extent:u,zoom:2})});function g(e,t){e=v(e),t=v(t);var n=((e=M(e))-169028.66)/1e4,a=((t=M(t))-26782.5)/1e4;return 600072.37+211455.93*a-10938.51*a*n-.36*a*Math.pow(n,2)-44.54*Math.pow(a,3)}function l(e,t){e=v(e),t=v(t);var n=((e=M(e))-169028.66)/1e4,a=((t=M(t))-26782.5)/1e4;return 200147.07+308807.95*n+3745.25*Math.pow(a,2)+76.63*Math.pow(n,2)-194.56*Math.pow(a,2)*n+119.79*Math.pow(n,3)}function b(e,t){var n=(e-6e5)/1e6,a=(t-2e5)/1e6,r=16.9023892+3.238272*a-.270978*Math.pow(n,2)-.002528*Math.pow(a,2)-.0447*Math.pow(n,2)*a-.014*Math.pow(a,3);return r=100*r/36}function f(e,t){var n=(e-6e5)/1e6,a=(t-2e5)/1e6,r=2.6779094+4.728982*n+.791484*n*a+.1306*n*Math.pow(a,2)-.0436*Math.pow(n,3);return r=100*r/36}function v(e){var t=parseInt(e,10),n=parseInt(60*(e-t),10);return t+n/100+60*(60*(e-t)-n)/1e4}function M(e){var t=parseInt(e,10),n=parseInt(100*(e-t),10),a=100*(100*(e-t)-n),r=String(e).split(".");return 2==r.length&&2==r[1].length&&(n=Number(r[1]),a=0),a+60*n+3600*t}}},[[395,0]]]);
//# sourceMappingURL=wms-custom-proj.js.map