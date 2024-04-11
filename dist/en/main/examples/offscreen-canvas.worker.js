import MVT from"ol/format/MVT.js";import TileQueue,{getTilePriority as tilePriorityFunction}from"ol/TileQueue.js";import VectorTileLayer from"ol/layer/VectorTile.js";import VectorTileSource from"ol/source/VectorTile.js";import stringify from"json-stringify-safe";import{get}from"ol/proj.js";import{inView}from"ol/layer/Layer.js";import{stylefunction}from"ol-mapbox-style";const worker=self;let frameState,pixelRatio,rendererTransform;const canvas=new OffscreenCanvas(1,1);canvas.style={};const context=canvas.getContext("2d"),sources={landcover:new VectorTileSource({maxZoom:9,format:new MVT,url:"https://api.maptiler.com/tiles/landcover/{z}/{x}/{y}.pbf?key=Get your own API key at https://www.maptiler.com/cloud/"}),contours:new VectorTileSource({minZoom:9,maxZoom:14,format:new MVT,url:"https://api.maptiler.com/tiles/contours/{z}/{x}/{y}.pbf?key=Get your own API key at https://www.maptiler.com/cloud/"}),maptiler_planet:new VectorTileSource({format:new MVT,maxZoom:14,url:"https://api.maptiler.com/tiles/v3/{z}/{x}/{y}.pbf?key=Get your own API key at https://www.maptiler.com/cloud/"})},layers=[];function getFont(e){return e[0].replace("Noto Sans","serif").replace("Roboto","sans-serif")}function loadStyles(){fetch("https://api.maptiler.com/maps/streets-v2/style.json?key=Get your own API key at https://www.maptiler.com/cloud/").then((e=>e.json())).then((e=>{const t=[];let r;e.layers.forEach((e=>{e.source&&(r!==e.source&&(r=e.source,t.push({source:e.source,layers:[]})),t[t.length-1].layers.push(e.id))}));const o=e.sprite+(pixelRatio>1?"@2x":"")+".json",a=e.sprite+(pixelRatio>1?"@2x":"")+".png";fetch(o).then((e=>e.json())).then((r=>{t.forEach((t=>{const o=sources[t.source];if(!o)return;const s=new VectorTileLayer({declutter:!0,source:o,minZoom:o.getTileGrid().getMinZoom()});s.getRenderer().useContainer=function(e,t){this.containerReused=this.getLayer()!==layers[0],this.canvas=canvas,this.context=context,this.container={firstElementChild:canvas,style:{opacity:s.getOpacity()}},rendererTransform=t},stylefunction(s,e,t.layers,void 0,r,a,getFont),layers.push(s)})),worker.postMessage({action:"requestRender"})}))}))}const tileQueue=new TileQueue(((e,t,r,o)=>tilePriorityFunction(frameState,e,t,r,o)),(()=>worker.postMessage({action:"requestRender"}))),maxTotalLoading=8,maxNewLoads=2;worker.addEventListener("message",(e=>{if("requestFeatures"===e.data.action){const t=layers.filter((e=>inView(e.getLayerState(),frameState.viewState))).map((t=>t.getFeatures(e.data.pixel)));return void Promise.all(t).then((e=>{const t=e.flat();worker.postMessage({action:"getFeatures",features:JSON.parse(stringify(t.map((e=>e.getProperties()))))})}))}if("render"!==e.data.action)return;frameState=e.data.frameState,pixelRatio||(pixelRatio=frameState.pixelRatio,loadStyles()),frameState.tileQueue=tileQueue,frameState.viewState.projection=get("EPSG:3857"),layers.forEach((e=>{if(inView(e.getLayerState(),frameState.viewState)){e.getRenderer().renderFrame(frameState,canvas)}})),layers.forEach((e=>e.getRenderer().context&&e.renderDeclutter(frameState))),tileQueue.getTilesLoading()<8&&(tileQueue.reprioritize(),tileQueue.loadMoreTiles(8,2));const t=canvas.transferToImageBitmap();worker.postMessage({action:"rendered",imageData:t,transform:rendererTransform,frameState:JSON.parse(stringify(frameState))},[t])}));