"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6070],{9032:function(t,e,o){var i=o(6291),n=o(5883),a=o(1376),d=o(4354);function s(t){this.el=t,this.loading=0,this.loaded=0}s.prototype.addLoading=function(){++this.loading,this.update()},s.prototype.addLoaded=function(){++this.loaded,this.update()},s.prototype.update=function(){var t=(this.loaded/this.loading*100).toFixed(1)+"%";this.el.style.width=t},s.prototype.show=function(){this.el.style.visibility="visible"},s.prototype.hide=function(){var t=this.el.style;setTimeout((function(){t.visibility="hidden",t.width=0}),250)};var r=new s(document.getElementById("progress")),l=new n.Z({url:"https://ahocevar.com/geoserver/wms",params:{LAYERS:"topp:states"},serverType:"geoserver"});l.on("imageloadstart",(function(){r.addLoading()})),l.on(["imageloadend","imageloaderror"],(function(){r.addLoaded()}));var u=new a.Z({layers:[new i.Z({source:l})],target:"map",view:new d.ZP({center:[-10997148,4569099],zoom:4})});u.on("loadstart",(function(){r.show()})),u.on("loadend",(function(){r.hide()}))}},function(t){var e=function(e){return t(t.s=e)};e(9877),e(9032)}]);
//# sourceMappingURL=image-load-events.js.map