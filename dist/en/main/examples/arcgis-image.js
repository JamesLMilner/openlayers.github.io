"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[694],{68584:function(i,t,e){var s=e(1055),r=e(40824),a=e(55117),n=e(91531),o=e(18468),h=e(57419);class u extends n.ZP{constructor(i){super({attributions:(i=i||{}).attributions,interpolate:i.interpolate,projection:i.projection,resolutions:i.resolutions}),this.crossOrigin_=void 0!==i.crossOrigin?i.crossOrigin:null,this.hidpi_=void 0===i.hidpi||i.hidpi,this.url_=i.url,this.imageLoadFunction_=void 0!==i.imageLoadFunction?i.imageLoadFunction:n.r6,this.params_=Object.assign({},i.params),this.imageSize_=[0,0],this.renderedRevision_=0,this.ratio_=void 0!==i.ratio?i.ratio:1.5,this.loaderProjection_=null}getParams(){return this.params_}getImageInternal(i,t,e,s){return void 0===this.url_?null:(this.loader&&this.loaderProjection_===s||(this.loaderProjection_=s,this.loader=(0,o.K)({crossOrigin:this.crossOrigin_,params:this.params_,projection:s,hidpi:this.hidpi_,url:this.url_,ratio:this.ratio_,load:(i,t)=>(this.image.setImage(i),this.imageLoadFunction_(this.image,t),(0,h.Jx)(i))})),super.getImageInternal(i,t,e,s))}getImageLoadFunction(){return this.imageLoadFunction_}getUrl(){return this.url_}setImageLoadFunction(i){this.imageLoadFunction_=i,this.changed()}setUrl(i){i!=this.url_&&(this.url_=i,this.loader=null,this.changed())}updateParams(i){Object.assign(this.params_,i),this.changed()}changed(){this.image=null,super.changed()}}var c=u,l=e(72893),d=e(11802);const g=[new l.Z({source:new a.Z}),new d.Z({source:new c({ratio:1,params:{},url:"https://sampleserver6.arcgisonline.com/ArcGIS/rest/services/USA/MapServer"})})];new s.Z({layers:g,target:"map",view:new r.ZP({center:[-10997148,4569099],zoom:4})})}},function(i){var t;t=68584,i(i.s=t)}]);
//# sourceMappingURL=arcgis-image.js.map