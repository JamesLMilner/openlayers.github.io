(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{380:function(e,t,n){"use strict";n.r(t);var o=n(66),r=n(22),a=n(21),i=n(31),l=n(35),u=n(3),c=n(148),s=n(17),g=n(10),f=n(2),w=n(9),p=n(11),h=n(5),d=n(20);function m(e,t){return Math.sqrt((t[0]-e[0])*(t[0]-e[0])+(t[1]-e[1])*(t[1]-e[1]))}function v(e,t,n){var o=m(t,e),r=m(t,n),a=((e[0]-t[0])*(n[0]-t[0])+(e[1]-t[1])*(n[1]-t[1]))/r;return Math.abs(o-a)<1e-6&&o<r}function y(e,t){return(e%t+t)%t}function b(e,t,n){var o=e.getGeometry();"MultiPolygon"===o.getType()&&(o=o.getPolygon(0));var r,a,i,l=o.getLinearRing().getCoordinates(),u=-1;for(r=0;r<l.length;r++)if(v(t,a=l[r],i=l[y(r+1,l.length)])){u=r;break}var c=[],s=0,g=[],f=0;for(r=0;r<l.length;r++){if(a=0===r?t:l[y(r+u,l.length)],i=l[y(r+u+1,l.length)],c.push(a),v(n,a,i)){c.push(n),s+=m(a,n);break}s+=m(a,i)}for(r=0;r<l.length;r++){if(a=l[y(u-r,l.length)],i=0===r?t:l[y(u-r+1,l.length)],g.push(i),v(n,a,i)){g.push(n),f+=m(n,i);break}f+=m(a,i)}return f<s?g:c}var C,P,k,x,G=new h.a({source:new w.b}),I=new d.a({source:new p.a({format:new i.a,url:"https://ahocevar.com/geoserver/wfs?service=wfs&request=getfeature&typename=topp:states&cql_filter=STATE_NAME='Idaho'&outputformat=application/json"})}),E=new d.a({source:new p.a,style:new g.c({stroke:new s.a({color:"rgba(100, 255, 0, 1)",width:2}),fill:new a.a({color:"rgba(100, 255, 0, 0.3)"})})}),F=new r.a({geometry:new l.a([])}),A=new d.a({source:new p.a({features:[F]}),style:new g.c({stroke:new s.a({color:"rgba(255, 0, 0, 1)",width:2})})}),M=new u.a({layers:[G,I,E,A],target:"map",view:new f.a({center:[-12986427,5678422],zoom:5})}),T=!1,q={hitTolerance:10,layerFilter:function(e){return e===I}};M.on("click",(function(e){if(T){var t=!1;M.forEachFeatureAtPixel(e.pixel,(function(n){if(!P||n===P){t=!0;var o=M.getCoordinateFromPixel(e.pixel);if(n===P){x=P.getGeometry().getClosestPoint(o);var r=b(P,k,x);C.removeLastPoint(),C.appendCoordinates(r),P=null}k=(P=n).getGeometry().getClosestPoint(o)}}),q),t||(F.getGeometry().setCoordinates([]),P=null)}})),M.on("pointermove",(function(e){if(P&&T){var t=null;M.forEachFeatureAtPixel(e.pixel,(function(n){P===n&&(t=M.getCoordinateFromPixel(e.pixel))}),q);var n=[];t&&(x=P.getGeometry().getClosestPoint(t),n=b(P,k,x)),F.getGeometry().setCoordinates(n)}}));var S=new c.a({source:I.getSource()}),J=document.getElementById("type");function L(){"None"!==J.value&&((C=new o.c({source:E.getSource(),type:J.value})).on("drawstart",(function(){T=!0})),C.on("drawend",(function(){T=!1,F.getGeometry().setCoordinates([]),P=null})),M.addInteraction(C),M.addInteraction(S))}J.onchange=function(){M.removeInteraction(C),M.removeInteraction(S),L()},L()}},[[380,0]]]);
//# sourceMappingURL=tracing.js.map