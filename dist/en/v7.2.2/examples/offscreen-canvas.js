(self.webpackChunk=self.webpackChunk||[]).push([[6440],{3784:function(e,t){function n(e,t){var n=[],a=[];return null==t&&(t=function(e,t){return n[0]===t?"[Circular ~]":"[Circular ~."+a.slice(0,n.indexOf(t)).join(".")+"]"}),function(i,r){if(n.length>0){var s=n.indexOf(this);~s?n.splice(s+1):n.push(this),~s?a.splice(s,1/0,i):a.push(i),~n.indexOf(r)&&(r=t.call(this,i,r))}else n.push(r);return null==e?r:e.call(this,i,r)}}(e.exports=function(e,t,a,i){return JSON.stringify(e,n(t,i),a)}).getSerialize=n},7117:function(e,t,n){"use strict";var a=n(1462),i=n(1055),r=n(7501),s=n(824);var o=n(3784),c=n(7703),l=n(4669),u=n(658);const d=new function(){return new Worker(n.p+"offscreen-canvas.worker.worker.js")};let f,p,g,h,m,w;function y(){if(m){const e=w.viewState,t=m.viewState,n=e.center,a=e.resolution,i=e.rotation,r=t.center,s=t.resolution,o=t.rotation,c=(0,l.Ue)();i||(0,l.qC)(c,(r[0]-n[0])/a,(n[1]-r[1])/a,s/a,s/a,i-o,0,0),p.style.transform=(0,l.BB)(c)}}const v=new i.Z({layers:[new a.Z({render:function(e){return f||(f=document.createElement("div"),f.style.position="absolute",f.style.width="100%",f.style.height="100%",p=document.createElement("div"),p.style.position="absolute",p.style.width="100%",p.style.height="100%",f.appendChild(p),g=document.createElement("canvas"),g.style.position="absolute",g.style.left="0",g.style.transformOrigin="top left",p.appendChild(g)),w=e,y(),h?e.animate=!0:(h=!0,d.postMessage({action:"render",frameState:JSON.parse(o(e))})),f},source:new r.Z({attributions:['<a href="https://www.maptiler.com/copyright/" target="_blank">© MapTiler</a>','<a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap contributors</a>']})})],target:"map",view:new s.ZP({resolutions:(0,u.dl)({tileSize:512}).getResolutions(),center:[0,0],zoom:2})});v.addControl(new c.Z),v.on("pointermove",(function(e){if(e.dragging)return;const t=v.getEventPixel(e.originalEvent);d.postMessage({action:"requestFeatures",pixel:t})})),d.addEventListener("message",(e=>{if("loadImage"===e.data.action){const t=new Image;t.crossOrigin="anonymous",t.addEventListener("load",(function(){createImageBitmap(t,0,0,t.width,t.height).then((t=>{d.postMessage({action:"imageLoaded",image:t,src:e.data.src},[t])}))})),t.src=e.data.src}else"getFeatures"===e.data.action?function(e){if(0==e.length)return b.innerText="",void(b.style.opacity=0);const t=e.map((e=>Object.keys(e).filter((e=>!e.includes(":"))).reduce(((t,n)=>(t[n]=e[n],t)),{})));b.innerText=JSON.stringify(t,null,2),b.style.opacity=1}(e.data.features):"requestRender"===e.data.action?v.render():g&&"rendered"===e.data.action&&(requestAnimationFrame((function(){const t=e.data.imageData;g.width=t.width,g.height=t.height,g.getContext("2d").drawImage(t,0,0),g.style.transform=e.data.transform,m=e.data.frameState,y()})),h=!1)}));const b=document.getElementById("info")}},function(e){var t;t=7117,e(e.s=t)}]);
//# sourceMappingURL=offscreen-canvas.js.map