"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1904],{49776:function(e,t,n){var s=n(68444),o=n(58236),c=n(80372),r=n(86728),a=n(64720),i=n(33630),l=n(40792),p=n(96480),_=n(3248),m=n(1360),u=n(75888),E=n(48011),g=n(88470),d=n(93272);l.c.defs("EPSG:27700","+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717 +x_0=400000 +y_0=-100000 +ellps=airy +towgs84=446.448,-125.157,542.06,0.15,0.247,0.842,-20.489 +units=m +no_defs"),l.c.defs("EPSG:23032","+proj=utm +zone=32 +ellps=intl +towgs84=-87,-98,-121,0,0,0,0 +units=m +no_defs"),l.c.defs("EPSG:5479","+proj=lcc +lat_1=-76.66666666666667 +lat_2=-79.33333333333333 +lat_0=-78 +lon_0=163 +x_0=7000000 +y_0=5000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs"),l.c.defs("EPSG:21781","+proj=somerc +lat_0=46.95240555555556 +lon_0=7.439583333333333 +k_0=1 +x_0=600000 +y_0=200000 +ellps=bessel +towgs84=674.4,15.1,405.3,0,0,0,0 +units=m +no_defs"),l.c.defs("EPSG:3413","+proj=stere +lat_0=90 +lat_ts=70 +lon_0=-45 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs"),l.c.defs("EPSG:2163","+proj=laea +lat_0=45 +lon_0=-100 +x_0=0 +y_0=0 +a=6370997 +b=6370997 +units=m +no_defs"),l.c.defs("ESRI:54009","+proj=moll +lon_0=0 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs"),(0,d.sV)(l.c);const w=(0,g._M)("EPSG:27700");w.setExtent([-65e4,-15e4,135e4,145e4]);(0,g._M)("EPSG:23032").setExtent([-1206118.71,4021309.92,1295389,8051813.28]);(0,g._M)("EPSG:5479").setExtent([6825737.53,4189159.8,9633741.96,5782472.71]);(0,g._M)("EPSG:21781").setExtent([485071.54,75346.36,828515.78,299941.84]);(0,g._M)("EPSG:3413").setExtent([-4194304,-4194304,4194304,4194304]);(0,g._M)("EPSG:2163").setExtent([-8040784.5135,-2577524.921,3668901.4484,4785105.1096]);(0,g._M)("ESRI:54009").setExtent([-18e6,-9e6,18e6,9e6]);const S={};S.osm=new c.c({source:new p.c}),S.wms4326=new c.c({source:new _.c({url:"https://ahocevar.com/geoserver/gwc/service/wms",crossOrigin:"",params:{LAYERS:"ne:NE1_HR_LC_SR_W_DR",TILED:!0,VERSION:"1.1.1"},projection:"EPSG:4326",tileGrid:(0,u.Qr)({extent:[-180,-90,180,90],maxResolution:360/512,maxZoom:10}),reprojectionErrorThreshold:2})}),S.wms21781=new c.c({source:new _.c({attributions:'© <a href="https://shop.swisstopo.admin.ch/en/products/maps/national/lk1000"target="_blank">Pixelmap 1:1000000 / geo.admin.ch</a>',crossOrigin:"anonymous",params:{LAYERS:"ch.swisstopo.pixelkarte-farbe-pk1000.noscale",FORMAT:"image/jpeg"},url:"https://wms.geo.admin.ch/",projection:"EPSG:21781"})});const f=new i.c;S.wmts3413=new c.c;fetch("https://map1.vis.earthdata.nasa.gov/wmts-arctic/wmts.cgi?SERVICE=WMTS&request=GetCapabilities").then((function(e){return e.text()})).then((function(e){const t=f.read(e),n=(0,a.o)(t,{layer:"OSM_Land_Mask",matrixSet:"EPSG3413_250m"});n.crossOrigin="",n.projection="EPSG:3413",n.wrapX=!1,S.wmts3413.setSource(new a.c(n))})),S.bng=new c.c;fetch("https://tiles.arcgis.com/tiles/qHLhLQrcvEnxjtPr/arcgis/rest/services/OS_Open_Raster/MapServer/WMTS").then((function(e){return e.text()})).then((function(e){const t=f.read(e),n=(0,a.o)(t,{layer:"OS_Open_Raster"});n.attributions="Contains OS data © Crown Copyright and database right "+(new Date).getFullYear(),n.crossOrigin="",n.projection="EPSG:27700",n.wrapX=!1,S.bng.setSource(new a.c(n))}));const h=(0,E.K6)((0,g._M)("EPSG:3857").getExtent())/256,x=new Array(22);for(let e=0,t=x.length;e<t;++e)x[e]=h/Math.pow(2,e);S.states=new c.c({source:new _.c({url:"https://ahocevar.com/geoserver/wms",crossOrigin:"",params:{LAYERS:"topp:states"},serverType:"geoserver",tileGrid:new o.c({extent:[-13884991,2870341,-7455066,6338219],resolutions:x,tileSize:[512,256]}),projection:"EPSG:3857"})});const G=new s.c({layers:[S.osm,S.bng],target:"map",view:new r.cp({projection:"EPSG:3857",center:[0,0],zoom:2})}),y=document.getElementById("base-layer"),v=document.getElementById("overlay-layer"),P=document.getElementById("view-projection"),j=document.getElementById("render-edges");let b=!1;function R(){const e=(0,g._M)(P.value),t=e.getExtent(),n=new r.cp({projection:e,center:(0,E.Ks)(t||[0,0,0,0]),zoom:0,extent:t||void 0});G.setView(n),e.isGlobal()?S.bng.setExtent((0,g.W0)(w.getExtent(),w,e,2)):S.bng.setExtent(void 0)}P.onchange=function(){R()},R();const M=function(e){if(e instanceof c.c){const t=e.getSource();t instanceof m.c&&t.setRenderReprojectionEdges(b)}};y.onchange=function(){const e=S[y.value];e&&(e.setOpacity(1),M(e),G.getLayers().setAt(0,e))},v.onchange=function(){const e=S[v.value];e&&(e.setOpacity(.7),M(e),G.getLayers().setAt(1,e))},j.onchange=function(){b=j.checked,G.getLayers().forEach((function(e){M(e)}))}}},function(e){var t;t=49776,e(e.s=t)}]);
//# sourceMappingURL=reprojection.js.map