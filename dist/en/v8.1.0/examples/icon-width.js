"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9673],{93882:function(e,t,n){var a=n(79619),g=n(1055),i=n(47051),c=n(4711),r=n(40824),s=n(80677),d=n(91652),l=n(1733);const u=document.getElementById("width-input"),m=document.getElementById("height-input"),o=document.getElementById("clear-width-button"),h=document.getElementById("clear-height-button"),w=document.getElementById("scale"),I=new a.Z({geometry:new i.Z([0,0]),name:"Null Island",population:4e3,rainfall:500}),p=new s.ZP({image:new d.Z({src:"data/icon.png",width:Number(u.value),height:Number(m.value)})});I.setStyle(p),u.addEventListener("input",(e=>{const t=p.getImage();p.setImage(new d.Z({src:"data/icon.png",width:Number(e.target.value),height:t.getHeight()})),I.setStyle(p)})),m.addEventListener("input",(e=>{const t=p.getImage();p.setImage(new d.Z({src:"data/icon.png",height:Number(e.target.value),width:t.getWidth()})),I.setStyle(p)})),o.addEventListener("click",(()=>{const e=p.getImage();p.setImage(new d.Z({src:"data/icon.png",height:e.getHeight()})),I.setStyle(p),u.value=Math.round(p.getImage().getWidth()),w.innerText=Z(p.getImage().getScale()),I.setStyle(p)})),h.addEventListener("click",(()=>{const e=p.getImage();p.setImage(new d.Z({src:"data/icon.png",width:e.getWidth()})),I.setStyle(p),m.value=Math.round(p.getImage().getHeight()),I.setStyle(p)}));const y=new c.Z({features:[I]}),v=new l.Z({source:y});function Z(e){return Array.isArray(e)?"["+e?.map((e=>e.toFixed(2))).join(", ")+"]":e}new g.Z({layers:[v],target:"map",view:new r.ZP({center:[0,0],zoom:3})}).on("rendercomplete",(()=>w.innerText=Z(p.getImage().getScale())))}},function(e){var t;t=93882,e(e.s=t)}]);
//# sourceMappingURL=icon-width.js.map