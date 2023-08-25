"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2910],{85596:function(t,e,i){var s=i(1055),n=i(30787),o=i(20171),r=i(72893),a=i(92486),h=i(69319),l=i(18489),d=i(74251),c=i(36117),u=i(61672),_=i(70658),p=i(69649),g=i(81625),m=i(41507),E=i(38760);class f extends h.Z{constructor(t,e,i,s,n,o){super(t,e),this.src_=i,this.extent_=s,this.preemptive_=n,this.grid_=null,this.keys_=null,this.data_=null,this.jsonp_=o}getImage(){return null}getData(t){if(!this.grid_||!this.keys_)return null;const e=(t[0]-this.extent_[0])/(this.extent_[2]-this.extent_[0]),i=(t[1]-this.extent_[1])/(this.extent_[3]-this.extent_[1]),s=this.grid_[Math.floor((1-i)*this.grid_.length)];if("string"!=typeof s)return null;let n=s.charCodeAt(Math.floor(e*s.length));n>=93&&n--,n>=35&&n--,n-=32;let o=null;if(n in this.keys_){const t=this.keys_[n];o=this.data_&&t in this.data_?this.data_[t]:t}return o}forDataAtCoordinate(t,e,i){this.state==d.Z.EMPTY&&!0===i?(this.state=d.Z.IDLE,(0,m.Vx)(this,a.Z.CHANGE,(function(i){e(this.getData(t))}),this),this.loadInternal_()):!0===i?setTimeout((()=>{e(this.getData(t))}),0):e(this.getData(t))}getKey(){return this.src_}handleError_(){this.state=d.Z.ERROR,this.changed()}handleLoad_(t){this.grid_=t.grid,this.keys_=t.keys,this.data_=t.data,this.state=d.Z.LOADED,this.changed()}loadInternal_(){if(this.state==d.Z.IDLE)if(this.state=d.Z.LOADING,this.jsonp_)(0,E.R6)(this.src_,this.handleLoad_.bind(this),this.handleError_.bind(this));else{const t=new XMLHttpRequest;t.addEventListener("load",this.onXHRLoad_.bind(this)),t.addEventListener("error",this.onXHRError_.bind(this)),t.open("GET",this.src_),t.send()}}onXHRLoad_(t){const e=t.target;if(!e.status||e.status>=200&&e.status<300){let t;try{t=JSON.parse(e.responseText)}catch(t){return void this.handleError_()}this.handleLoad_(t)}else this.handleError_()}onXHRError_(t){this.handleError_()}load(){this.preemptive_?this.loadInternal_():this.setState(d.Z.EMPTY)}}class v extends l.Z{constructor(t){if(super({projection:(0,g.U2)("EPSG:3857"),state:"loading",zDirection:t.zDirection}),this.preemptive_=void 0===t.preemptive||t.preemptive,this.tileUrlFunction_=u.vU,this.template_=void 0,this.jsonp_=t.jsonp||!1,t.url)if(this.jsonp_)(0,E.R6)(t.url,this.handleTileJSONResponse.bind(this),this.handleTileJSONError.bind(this));else{const e=new XMLHttpRequest;e.addEventListener("load",this.onXHRLoad_.bind(this)),e.addEventListener("error",this.onXHRError_.bind(this)),e.open("GET",t.url),e.send()}else{if(!t.tileJSON)throw new Error("Either `url` or `tileJSON` options must be provided");this.handleTileJSONResponse(t.tileJSON)}}onXHRLoad_(t){const e=t.target;if(!e.status||e.status>=200&&e.status<300){let t;try{t=JSON.parse(e.responseText)}catch(t){return void this.handleTileJSONError()}this.handleTileJSONResponse(t)}else this.handleTileJSONError()}onXHRError_(t){this.handleTileJSONError()}getTemplate(){return this.template_}forDataAtCoordinateAndResolution(t,e,i,s){if(this.tileGrid){const n=this.tileGrid.getZForResolution(e,this.zDirection),o=this.tileGrid.getTileCoordForCoordAndZ(t,n);this.getTile(o[0],o[1],o[2],1,this.getProjection()).forDataAtCoordinate(t,i,s)}else!0===s?setTimeout((function(){i(null)}),0):i(null)}handleTileJSONError(){this.setState("error")}handleTileJSONResponse(t){const e=(0,g.U2)("EPSG:4326"),i=this.getProjection();let s;if(void 0!==t.bounds){const n=(0,g.WO)(e,i);s=(0,c.Ne)(t.bounds,n)}const n=(0,_.Tl)(i),o=t.minzoom||0,r=t.maxzoom||22,a=(0,_.dl)({extent:n,maxZoom:r,minZoom:o});this.tileGrid=a,this.template_=t.template;const h=t.grids;if(h){if(this.tileUrlFunction_=(0,u.uR)(h,a),void 0!==t.attribution){const e=void 0!==s?s:n;this.setAttributions((function(i){return(0,c.kK)(e,i.extent)?[t.attribution]:null}))}this.setState("ready")}else this.setState("error")}getTile(t,e,i,s,n){const o=(0,p.lg)(t,e,i);if(this.tileCache.containsKey(o))return this.tileCache.get(o);const r=[t,e,i],a=this.getTileCoordForTileUrlFunction(r,n),h=this.tileUrlFunction_(a,s,n),l=new f(r,void 0!==h?d.Z.IDLE:d.Z.EMPTY,void 0!==h?h:"",this.tileGrid.getTileCoordExtent(r),this.preemptive_,this.jsonp_);return this.tileCache.set(o,l),l}useTile(t,e,i){const s=(0,p.lg)(t,e,i);this.tileCache.containsKey(s)&&this.tileCache.get(s)}}var T=v,y=i(40824);const b="pk.eyJ1IjoiYWhvY2V2YXIiLCJhIjoiY2t0cGdwMHVnMGdlbzMxbDhwazBic2xrNSJ9.WbcTL9uj8JPAsnT9mgb7oQ",R=new r.Z({source:new o.Z({url:"https://api.tiles.mapbox.com/v4/mapbox.geography-class.json?secure&access_token="+b})}),x=new T({url:"https://api.tiles.mapbox.com/v4/mapbox.geography-class.json?secure&access_token="+b}),Z=new r.Z({source:x}),L=new y.ZP({center:[0,0],zoom:1}),S=document.getElementById("map"),C=new s.Z({layers:[R,Z],target:S,view:L}),O=document.getElementById("country-info"),D=document.getElementById("country-flag"),J=document.getElementById("country-name"),N=new n.Z({element:O,offset:[15,15],stopEvent:!1});C.addOverlay(N);const w=function(t){const e=L.getResolution();x.forDataAtCoordinateAndResolution(t,e,(function(e){S.style.cursor=e?"pointer":"",e&&(D.src="data:image/png;base64,"+e.flag_png,J.innerHTML=e.admin),N.setPosition(e?t:void 0)}))};C.on("pointermove",(function(t){if(t.dragging)return;const e=C.getEventCoordinate(t.originalEvent);w(e)})),C.on("click",(function(t){w(t.coordinate)}))}},function(t){var e;e=85596,t(t.s=e)}]);
//# sourceMappingURL=utfgrid.js.map