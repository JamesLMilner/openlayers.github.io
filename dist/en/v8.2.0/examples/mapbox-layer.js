"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8329],{9660:function(t,e,o){var a=o(54805),n=o(40361),r=o(91462),i=o(1055),s=o(27501),c=o(4711),l=o(40824),p=o(81625);const u=[-98.8,37.9],m=new mapboxgl.Map({style:"https://api.maptiler.com/maps/bright/style.json?key=get_your_own_D6rA4zTHduk6KOKTXzGB",attributionControl:!1,boxZoom:!1,center:u,container:"map",doubleClickZoom:!1,dragPan:!1,dragRotate:!1,interactive:!1,keyboard:!1,pitchWithRotate:!1,scrollZoom:!1,touchZoomRotate:!1}),w=new r.Z({render:function(t){const e=m.getCanvas(),o=t.viewState,a=w.getVisible();e.style.display=a?"block":"none",e.style.position="absolute";const n=w.getOpacity();e.style.opacity=n;const r=o.rotation;return m.jumpTo({center:(0,p.bU)(o.center),zoom:o.zoom-1,bearing:180*-r/Math.PI,animate:!1}),m._frame&&(m._frame.cancel(),m._frame=null),m._render(),e},source:new s.Z({attributions:['<a href="https://www.maptiler.com/copyright/" target="_blank">© MapTiler</a>','<a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap contributors</a>']})}),g=new n.Z({source:new c.Z({url:"data/geojson/world-cities.geojson",format:new a.Z}),weight:function(t){return t.get("population")/1e7},radius:15,blur:15});new i.Z({target:"map",view:new l.ZP({center:(0,p.mi)(u),zoom:4}),layers:[w,g]})}},function(t){var e;e=9660,t(t.s=e)}]);
//# sourceMappingURL=mapbox-layer.js.map