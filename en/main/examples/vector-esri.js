(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{383:function(e,r,n){"use strict";n.r(r);var t=n(216),o=n(3),a=n(11),i=n(2),s=n(27),c=n(10),l=n(21),u=n(17),g=n(20),w=n(5),p=n(57),d=n(4),m=n(131),f=new t.a,v={ABANDONED:new c.c({fill:new l.a({color:"rgba(225, 225, 225, 255)"}),stroke:new u.a({color:"rgba(0, 0, 0, 255)",width:.4})}),GAS:new c.c({fill:new l.a({color:"rgba(255, 0, 0, 255)"}),stroke:new u.a({color:"rgba(110, 110, 110, 255)",width:.4})}),OIL:new c.c({fill:new l.a({color:"rgba(56, 168, 0, 255)"}),stroke:new u.a({color:"rgba(110, 110, 110, 255)",width:0})}),OILGAS:new c.c({fill:new l.a({color:"rgba(168, 112, 0, 255)"}),stroke:new u.a({color:"rgba(110, 110, 110, 255)",width:.4})})},y=new a.a({loader:function(e,r,n){var t="https://sampleserver3.arcgisonline.com/ArcGIS/rest/services/Petroleum/KSFields/FeatureServer/0/query/?f=json&returnGeometry=true&spatialRel=esriSpatialRelIntersects&geometry="+encodeURIComponent('{"xmin":'+e[0]+',"ymin":'+e[1]+',"xmax":'+e[2]+',"ymax":'+e[3]+',"spatialReference":{"wkid":102100}}')+"&geometryType=esriGeometryEnvelope&inSR=102100&outFields=*&outSR=102100";$.ajax({url:t,dataType:"jsonp",success:function(e){if(e.error)alert(e.error.message+"\n"+e.error.details.join("\n"));else{var r=f.readFeatures(e,{featureProjection:n});r.length>0&&y.addFeatures(r)}}})},strategy:Object(m.c)(Object(p.b)({tileSize:512}))}),b=new g.a({source:y,style:function(e){var r=e.get("activeprod");return v[r]}}),h=new w.a({source:new s.a({attributions:'Tiles © <a href="https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer">ArcGIS</a>',url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}"})}),S=new o.a({layers:[h,b],target:document.getElementById("map"),view:new i.a({center:Object(d.g)([-97.6114,38.8403]),zoom:7})}),I=function(e){var r=[];if(S.forEachFeatureAtPixel(e,(function(e){r.push(e)})),r.length>0){var n,t,o=[];for(n=0,t=r.length;n<t;++n)o.push(r[n].get("field_name"));document.getElementById("info").innerHTML=o.join(", ")||"(unknown)",S.getTarget().style.cursor="pointer"}else document.getElementById("info").innerHTML="&nbsp;",S.getTarget().style.cursor=""};S.on("pointermove",(function(e){if(!e.dragging){var r=S.getEventPixel(e.originalEvent);I(r)}})),S.on("click",(function(e){I(e.pixel)}))}},[[383,0]]]);
//# sourceMappingURL=vector-esri.js.map