(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{241:function(e,n,t){"use strict";t.r(n);var o=t(31),a=t(3),r=t(2),c=t(96),i=t(184),s=t(11),u=t(9),w=t(5),g=t(20),d=t(34),f=new s.a({url:"data/geojson/countries.geojson",format:new o.a}),m=new a.a({layers:[new w.a({source:new u.b}),new g.a({source:f})],target:"map",view:new r.a({center:[0,0],zoom:2,constrainRotation:16})}),v=new c.a;m.addInteraction(v);var p=v.getFeatures(),l=new i.a({condition:d.k});m.addInteraction(l),l.on("boxend",(function(){var e=m.getView().getRotation(),n=e%(Math.PI/2)!=0,t=n?[]:p,o=l.getGeometry().getExtent();if(f.forEachFeatureIntersectingExtent(o,(function(e){t.push(e)})),n){var a=[0,0],r=l.getGeometry().clone();r.rotate(-e,a);var c=r.getExtent();t.forEach((function(n){var t=n.getGeometry().clone();t.rotate(-e,a),t.intersectsExtent(c)&&p.push(n)}))}})),l.on("boxstart",(function(){p.clear()}));var h=document.getElementById("info");p.on(["add","remove"],(function(){var e=p.getArray().map((function(e){return e.get("name")}));e.length>0?h.innerHTML=e.join(", "):h.innerHTML="No countries selected"}))}},[[241,0]]]);
//# sourceMappingURL=box-selection.js.map