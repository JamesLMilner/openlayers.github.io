(self.webpackChunk=self.webpackChunk||[]).push([[741],{8985:function(t,e,r){"use strict";var n=r(1625),a=r(7842),i=r(640),o=r(6343),s='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',p="https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=get_your_own_D6rA4zTHduk6KOKTXzGB",c=new a.Z({source:new o.Z({url:p,tileSize:512,attributions:s})}),u=new a.Z({source:new o.Z({url:p,transition:0,tileSize:512,attributions:s}),visible:!1});new n.Z({layers:[c,u],target:"map",view:new i.ZP({center:[0,0],zoom:2,maxZoom:11})});document.getElementById("transition").addEventListener("change",(function(t){var e=t.target.checked;c.setVisible(e),u.setVisible(!e)}))}},function(t){"use strict";var e;e=8985,t(t.s=e)}]);
//# sourceMappingURL=tile-transitions.js.map