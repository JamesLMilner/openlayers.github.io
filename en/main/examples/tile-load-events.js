(self.webpackChunk=self.webpackChunk||[]).push([[2990],{8825:function(t,i,e){"use strict";var s=e(1625),n=e(7842),o=e(640),r=e(6343);function a(t){this.el=t,this.loading=0,this.loaded=0}a.prototype.addLoading=function(){0===this.loading&&this.show(),++this.loading,this.update()},a.prototype.addLoaded=function(){var t=this;setTimeout((function(){++t.loaded,t.update()}),100)},a.prototype.update=function(){var t=(this.loaded/this.loading*100).toFixed(1)+"%";if(this.el.style.width=t,this.loading===this.loaded){this.loading=0,this.loaded=0;var i=this;setTimeout((function(){i.hide()}),500)}},a.prototype.show=function(){this.el.style.visibility="visible"},a.prototype.hide=function(){this.loading===this.loaded&&(this.el.style.visibility="hidden",this.el.style.width=0)};var h=new a(document.getElementById("progress")),c=new r.Z({attributions:'<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',url:"https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=get_your_own_D6rA4zTHduk6KOKTXzGB",tileSize:512});c.on("tileloadstart",(function(){h.addLoading()})),c.on("tileloadend",(function(){h.addLoaded()})),c.on("tileloaderror",(function(){h.addLoaded()}));new s.Z({layers:[new n.Z({source:c})],target:"map",view:new o.ZP({center:[0,0],zoom:2})})}},function(t){"use strict";var i;i=8825,t(t.s=i)}]);
//# sourceMappingURL=tile-load-events.js.map