"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1743],{36078:function(e,t,o){var a=o(91118),r=o(41376),n=o(95783),l=o(54354),i=o(69039),c=o(77975),s=o(41372),p=o(98394),u=o(78699),g=new i.ZP({fill:new c.Z({color:"#eeeeee"})}),d=new r.Z({layers:[new s.Z({source:new n.Z({url:"https://openlayers.org/data/vector/ecoregions.json",format:new a.Z}),background:"white",style:function(e){var t=(0,u._2)(e.get("COLOR_NNH")||"#eeeeee");return t[3]=.75,g.getFill().setColor(t),g}}),new p.Z({source:new n.Z({url:"data/geojson/world-cities.geojson",format:new a.Z}),weight:function(e){return e.get("population")/1e7},radius:15,blur:15,opacity:.75})],target:"map",view:new l.ZP({center:[0,0],zoom:2})});document.getElementById("export-png").addEventListener("click",(function(){d.once("rendercomplete",(function(){var e=document.createElement("canvas"),t=d.getSize();e.width=t[0],e.height=t[1];var o=e.getContext("2d");if(Array.prototype.forEach.call(d.getViewport().querySelectorAll(".ol-layer canvas, canvas.ol-layer"),(function(e){if(e.width>0){var t=e.parentNode.style.opacity||e.style.opacity;o.globalAlpha=""===t?1:Number(t);var a,r=e.parentNode.style.backgroundColor;r&&(o.fillStyle=r,o.fillRect(0,0,e.width,e.height));var n=e.style.transform;a=n?n.match(/^matrix\(([^\(]*)\)$/)[1].split(",").map(Number):[parseFloat(e.style.width)/e.width,0,0,parseFloat(e.style.height)/e.height,0,0],CanvasRenderingContext2D.prototype.setTransform.apply(o,a),o.drawImage(e,0,0)}})),navigator.msSaveBlob)navigator.msSaveBlob(e.msToBlob(),"map.png");else{var a=document.getElementById("image-download");a.href=e.toDataURL(),a.click()}})),d.renderSync()}))}},function(e){var t=function(t){return e(e.s=t)};t(9877),t(36078)}]);
//# sourceMappingURL=export-map.js.map