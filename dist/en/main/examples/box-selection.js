"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6736],{1888:function(e,t,n){var o=n(37080),c=n(68444),r=n(2064),a=n(17256),s=n(86728),i=n(39624),l=n(20212),g=n(65732),u=n(1999),f=n(51144),w=n(48011),d=n(88024);const h=new a.c({url:"https://openlayers.org/data/vector/ecoregions.json",format:new o.c}),m=new g.cp({fill:new u.c({color:"#eeeeee"})}),p=new c.c({layers:[new r.c({source:h,background:"#1a2b39",style:function(e){const t=e.get("COLOR_BIO")||"#eeeeee";return m.getFill().setColor(t),m}})],target:"map",view:new s.cp({center:[0,0],zoom:2,constrainRotation:16})}),y=new g.cp({fill:new u.c({color:"rgba(255, 255, 255, 0.6)"}),stroke:new f.c({color:"rgba(255, 255, 255, 0.7)",width:2})}),x=new i.c({style:function(e){const t=e.get("COLOR_BIO")||"#eeeeee";return y.getFill().setColor(t),y}});p.addInteraction(x);const E=x.getFeatures(),b=new l.c({condition:d.ID});p.addInteraction(b),b.on("boxend",(function(){const e=b.getGeometry().getExtent(),t=p.getView().getProjection().getExtent(),n=(0,w.K6)(t),o=Math.floor((e[0]-t[0])/n),c=Math.floor((e[2]-t[0])/n);for(let r=o;r<=c;++r){const o=Math.max(e[0]-r*n,t[0]),c=Math.min(e[2]-r*n,t[2]),a=[o,e[1],c,e[3]],s=h.getFeaturesInExtent(a).filter((e=>!E.getArray().includes(e)&&e.getGeometry().intersectsExtent(a))),i=p.getView().getRotation();if(i%(Math.PI/2)!=0){const e=[0,0],t=b.getGeometry().clone();t.translate(-r*n,0),t.rotate(-i,e);const o=t.getExtent();s.forEach((function(t){const n=t.getGeometry().clone();n.rotate(-i,e),n.intersectsExtent(o)&&E.push(t)}))}else E.extend(s)}})),b.on("boxstart",(function(){E.clear()}));const I=document.getElementById("info");E.on(["add","remove"],(function(){const e=E.getArray().map((e=>e.get("ECO_NAME")));e.length>0?I.innerHTML=e.join(", "):I.innerHTML="None"}))}},function(e){var t;t=1888,e(e.s=t)}]);
//# sourceMappingURL=box-selection.js.map