"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6040],{56124:function(e,t,n){var i=n(68444),s=n(96480),o=n(80372),a=n(86728),l=n(57094),h=n(9788),r=n(19936);class c extends h.cp{constructor(e){const t=e||{};super(t),t.stopDown&&(this.stopDown=t.stopDown),this.scaleDeltaByPixel_=t.delta?t.delta:.01,this.duration_=void 0!==t.duration?t.duration:250,this.handlingDownUpSequence_=!1,this.handlingDoubleDownSequence_=!1,this.doubleTapTimeoutId_=void 0,this.trackedPointers_={},this.targetPointers=[]}handleEvent(e){if(!e.originalEvent)return!0;let t=!1;if(this.updateTrackedPointers_(e),this.handlingDownUpSequence_){if(e.type==r.c.POINTERDRAG)this.handleDragEvent(e),e.originalEvent.preventDefault();else if(e.type==r.c.POINTERUP){const t=this.handleUpEvent(e);this.handlingDownUpSequence_=t}}else if(e.type==r.c.POINTERDOWN)if(this.handlingDoubleDownSequence_){this.handlingDoubleDownSequence_=!1;const n=this.handleDownEvent(e);this.handlingDownUpSequence_=n,t=this.stopDown(n)}else t=this.stopDown(!1),this.waitForDblTap_();return!t}handleDragEvent(e){let t=1;const n=this.targetPointers[0],i=this.down_.originalEvent,s=n.clientY-i.clientY;void 0!==this.lastDistance_&&(t=1-(this.lastDistance_-s)*this.scaleDeltaByPixel_),this.lastDistance_=s,1!=t&&(this.lastScaleDelta_=t);const o=e.map,a=o.getView();o.render(),a.adjustResolutionInternal(t)}handleDownEvent(e){if(1==this.targetPointers.length){const t=e.map;return this.anchor_=null,this.lastDistance_=void 0,this.lastScaleDelta_=1,this.down_=e,this.handlingDownUpSequence_||t.getView().beginInteraction(),!0}return!1}handleUpEvent(e){if(0==this.targetPointers.length){const t=e.map.getView(),n=this.lastScaleDelta_>1?1:-1;return t.endInteraction(this.duration_,n),this.handlingDownUpSequence_=!1,this.handlingDoubleDownSequence_=!1,!1}return!0}stopDown(e){return e}updateTrackedPointers_(e){if(function(e){const t=e.type;return t===r.c.POINTERDOWN||t===r.c.POINTERDRAG||t===r.c.POINTERUP}(e)){const t=e.originalEvent,n=t.pointerId.toString();e.type==r.c.POINTERUP?delete this.trackedPointers_[n]:(e.type==r.c.POINTERDOWN||n in this.trackedPointers_)&&(this.trackedPointers_[n]=t),this.targetPointers=Object.values(this.trackedPointers_)}}waitForDblTap_(){void 0!==this.doubleTapTimeoutId_?(clearTimeout(this.doubleTapTimeoutId_),this.doubleTapTimeoutId_=void 0):(this.handlingDoubleDownSequence_=!0,this.doubleTapTimeoutId_=setTimeout(this.endInteraction_.bind(this),250))}endInteraction_(){this.handlingDoubleDownSequence_=!1,this.doubleTapTimeoutId_=void 0}}var d=c;new i.c({interactions:(0,l.Q)().extend([new d]),layers:[new o.c({source:new s.c})],target:"map",view:new a.cp({center:[0,0],zoom:2})})}},function(e){var t;t=56124,e(e.s=t)}]);
//# sourceMappingURL=double-click-drag-zoom.js.map