"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1596],{83368:function(e,t,n){var s=n(37080),c=n(68444),r=n(2064),o=n(17256),a=n(86728),i=n(65732),l=n(12748),w=n(1999),f=n(51144);const p=new c.c({target:"map",view:new a.cp({center:[0,0],zoom:2,extent:[-13882269,2890586,-7456136,6340207],showFullExtent:!0})}),u=new i.cp({text:new l.c({font:"13px Calibri,sans-serif",fill:new w.c({color:"#000"}),stroke:new f.c({color:"#fff",width:4})})}),d=[new i.cp({fill:new w.c({color:"rgba(255, 255, 255, 0.6)"}),stroke:new f.c({color:"#319FD3",width:1})}),u],b=new r.c({background:"white",source:new o.c({url:"https://openlayers.org/data/vector/us-states.json",format:new s.c}),style:function(e){return u.getText().setText([e.getId(),"bold 13px Calibri,sans-serif",` ${e.get("name")}`,"","\n","",`${e.get("density")} people/mi²`,"italic 11px Calibri,sans-serif"]),d}});p.addLayer(b)}},function(e){var t;t=83368,e(e.s=t)}]);
//# sourceMappingURL=rich-text-labels.js.map