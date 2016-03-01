// FIXME find correct globalCompositeOperation

goog.provide('ol.renderer.canvas.TileLayer');

goog.require('goog.asserts');
goog.require('ol.TileRange');
goog.require('ol.TileState');
goog.require('ol.array');
goog.require('ol.dom');
goog.require('ol.extent');
goog.require('ol.layer.Tile');
goog.require('ol.object');
goog.require('ol.render.EventType');
goog.require('ol.renderer.canvas.Layer');
goog.require('ol.source.Tile');


/**
 * @constructor
 * @extends {ol.renderer.canvas.Layer}
 * @param {ol.layer.Tile} tileLayer Tile layer.
 */
ol.renderer.canvas.TileLayer = function(tileLayer) {

  goog.base(this, tileLayer);

  /**
   * @private
   * @type {!Object.<string, Array.<ol.TileCoord>>}
   */
  this.clipTileCoords_ = {};

  /**
   * @private
   * @type {CanvasRenderingContext2D}
   */
  this.context_ = ol.dom.createCanvasContext2D();

  /**
   * @private
   * @type {Array.<ol.Tile|undefined>}
   */
  this.renderedTiles_ = null;

  /**
   * @private
   * @type {ol.Extent}
   */
  this.tmpExtent_ = ol.extent.createEmpty();

};
goog.inherits(ol.renderer.canvas.TileLayer, ol.renderer.canvas.Layer);


/**
 * @inheritDoc
 */
ol.renderer.canvas.TileLayer.prototype.composeFrame = function(
    frameState, layerState, context) {
  var pixelRatio = frameState.pixelRatio;
  var viewState = frameState.viewState;
  var center = viewState.center;
  var projection = viewState.projection;
  var resolution = viewState.resolution;
  var size = frameState.size;
  var pixelScale = pixelRatio / resolution;
  var layer = this.getLayer();
  var source = layer.getSource();
  goog.asserts.assertInstanceof(source, ol.source.Tile,
      'source is an ol.source.Tile');
  var tileGutter = source.getGutter(projection);

  var transform = this.getTransform(frameState, 0);

  this.dispatchPreComposeEvent(context, frameState, transform);

  var renderContext;
  if (layer.hasListener(ol.render.EventType.RENDER)) {
    // resize and clear
    this.context_.canvas.width = context.canvas.width;
    this.context_.canvas.height = context.canvas.height;
    renderContext = this.context_;
  } else {
    renderContext = context;
  }
  var offsetX = Math.round(pixelRatio * size[0] / 2);
  var offsetY = Math.round(pixelRatio * size[1] / 2);

  // for performance reasons, context.save / context.restore is not used
  // to save and restore the transformation matrix and the opacity.
  // see http://jsperf.com/context-save-restore-versus-variable
  var alpha = renderContext.globalAlpha;
  renderContext.globalAlpha = layerState.opacity;

  var tileGrid = source.getTileGridForProjection(projection);
  var tilesToDraw = this.renderedTiles_;

  var clipExtent, clipH, clipLeft, clipOrigin, clipTileCoord, clipTileCoords;
  var clipTop, clipW, currentZ, h, i, ii, j, jj, left, origin, tile, tileExtent;
  var tilePixelSize, top, w;
  for (i = 0, ii = tilesToDraw.length; i < ii; ++i) {
    tile = tilesToDraw[i];
    tileExtent = tileGrid.getTileCoordExtent(
        tile.getTileCoord(), this.tmpExtent_);
    currentZ = tile.getTileCoord()[0];
    // Calculate all insert points by tile widths from a common origin to avoid
    // gaps caused by rounding
    origin = ol.extent.getBottomLeft(tileGrid.getTileCoordExtent(
        tileGrid.getTileCoordForCoordAndZ(center, currentZ)));
    w = Math.round(ol.extent.getWidth(tileExtent) * pixelScale);
    h = Math.round(ol.extent.getHeight(tileExtent) * pixelScale);
    left = Math.round((tileExtent[0] - origin[0]) * pixelScale / w) * w +
        offsetX + Math.round((origin[0] - center[0]) * pixelScale);
    top = Math.round((origin[1] - tileExtent[3]) * pixelScale / h) * h +
        offsetY + Math.round((center[1] - origin[1]) * pixelScale);
    clipTileCoords = this.clipTileCoords_[tile.tileCoord.toString()];
    if (clipTileCoords) {
      // Create a clip mask for regions in this low resolution tile that will be
      // filled by a higher resolution tile
      renderContext.save();
      renderContext.beginPath();
      // counter-clockwise (outer ring) for current tile
      renderContext.moveTo(left + w, top);
      renderContext.lineTo(left, top);
      renderContext.lineTo(left, top + h);
      renderContext.lineTo(left + w, top + h);
      renderContext.closePath();
      // clockwise (inner rings) for lower resolution tiles
      for (j = 0, jj = clipTileCoords.length; j < jj; ++j) {
        clipTileCoord = clipTileCoords[j];
        clipExtent = tileGrid.getTileCoordExtent(clipTileCoord);
        clipOrigin = ol.extent.getBottomLeft(tileGrid.getTileCoordExtent(
            tileGrid.getTileCoordForCoordAndZ(center, clipTileCoord[0])));
        clipW = Math.round(ol.extent.getWidth(clipExtent) * pixelScale);
        clipH = Math.round(ol.extent.getHeight(clipExtent) * pixelScale);
        clipLeft = Math.round((clipExtent[0] - clipOrigin[0]) * pixelScale / clipW) * clipW +
            offsetX + Math.round((clipOrigin[0] - center[0]) * pixelScale);
        clipTop = Math.round((clipOrigin[1] - clipExtent[3]) * pixelScale / clipH) * clipH +
            offsetY + Math.round((center[1] - clipOrigin[1]) * pixelScale);
        renderContext.moveTo(clipLeft, clipTop + clipH);
        renderContext.lineTo(clipLeft, clipTop);
        renderContext.lineTo(clipLeft + clipW, clipTop);
        renderContext.lineTo(clipLeft + clipW, clipTop + clipH);
        renderContext.closePath();
      }
      renderContext.clip();
    }
    tilePixelSize = source.getTilePixelSize(currentZ, pixelRatio, projection);
    renderContext.drawImage(tile.getImage(), tileGutter, tileGutter,
        tilePixelSize[0], tilePixelSize[1], left, top, w, h);
    if (clipTileCoords) {
      renderContext.restore();
    }
  }

  if (renderContext != context) {
    this.dispatchRenderEvent(renderContext, frameState, transform);
    context.drawImage(renderContext.canvas, 0, 0);
  }
  renderContext.globalAlpha = alpha;

  this.dispatchPostComposeEvent(context, frameState, transform);
};


/**
 * @inheritDoc
 */
ol.renderer.canvas.TileLayer.prototype.prepareFrame = function(
    frameState, layerState) {

  var pixelRatio = frameState.pixelRatio;
  var viewState = frameState.viewState;
  var projection = viewState.projection;

  var tileLayer = this.getLayer();
  goog.asserts.assertInstanceof(tileLayer, ol.layer.Tile,
      'layer is an instance of ol.layer.Tile');
  var tileSource = tileLayer.getSource();
  var tileGrid = tileSource.getTileGridForProjection(projection);
  var z = tileGrid.getZForResolution(viewState.resolution);
  var tileResolution = tileGrid.getResolution(z);
  var center = viewState.center;
  var extent;
  if (tileResolution == viewState.resolution) {
    center = this.snapCenterToPixel(center, tileResolution, frameState.size);
    extent = ol.extent.getForViewAndSize(
        center, tileResolution, viewState.rotation, frameState.size);
  } else {
    extent = frameState.extent;
  }

  if (layerState.extent !== undefined) {
    extent = ol.extent.getIntersection(extent, layerState.extent);
  }
  if (ol.extent.isEmpty(extent)) {
    // Return false to prevent the rendering of the layer.
    return false;
  }

  var tileRange = tileGrid.getTileRangeForExtentAndResolution(
      extent, tileResolution);

  /**
   * @type {Object.<number, Object.<string, ol.Tile>>}
   */
  var tilesToDrawByZ = {};
  tilesToDrawByZ[z] = {};

  var findLoadedTiles = this.createLoadedTileFinder(
      tileSource, projection, tilesToDrawByZ);

  var useInterimTilesOnError = tileLayer.getUseInterimTilesOnError();

  var tmpExtent = ol.extent.createEmpty();
  var tmpTileRange = new ol.TileRange(0, 0, 0, 0);
  var childTileRange, fullyLoaded, tile, x, y;
  var drawableTile = (
      /**
       * @param {!ol.Tile} tile Tile.
       * @return {boolean} Tile is selected.
       */
      function(tile) {
        var tileState = tile.getState();
        return tileState == ol.TileState.LOADED ||
            tileState == ol.TileState.EMPTY ||
            tileState == ol.TileState.ERROR && !useInterimTilesOnError;
      });
  for (x = tileRange.minX; x <= tileRange.maxX; ++x) {
    for (y = tileRange.minY; y <= tileRange.maxY; ++y) {
      tile = tileSource.getTile(z, x, y, pixelRatio, projection);
      if (!drawableTile(tile) && tile.interimTile) {
        tile = tile.interimTile;
      }
      goog.asserts.assert(tile);
      if (drawableTile(tile)) {
        tilesToDrawByZ[z][tile.tileCoord.toString()] = tile;
        continue;
      }
      fullyLoaded = tileGrid.forEachTileCoordParentTileRange(
          tile.tileCoord, findLoadedTiles, null, tmpTileRange, tmpExtent);
      if (!fullyLoaded) {
        childTileRange = tileGrid.getTileCoordChildTileRange(
            tile.tileCoord, tmpTileRange, tmpExtent);
        if (childTileRange) {
          findLoadedTiles(z + 1, childTileRange);
        }
      }

    }
  }

  /** @type {Array.<number>} */
  var zs = Object.keys(tilesToDrawByZ).map(Number);
  zs.sort(ol.array.numberSafeCompareFunction);
  var renderables = [];
  var i, ii, currentZ, tileCoordKey, tilesToDraw;
  for (i = 0, ii = zs.length; i < ii; ++i) {
    currentZ = zs[i];
    tilesToDraw = tilesToDrawByZ[currentZ];
    for (tileCoordKey in tilesToDraw) {
      tile = tilesToDraw[tileCoordKey];
      if (tile.getState() == ol.TileState.LOADED) {
        renderables.push(tile);
      }
    }
  }
  this.renderedTiles_ = renderables;
  ol.object.clear(this.clipTileCoords_);
  if (!(tileSource.getOpaque(projection) && layerState.opacity == 1)) {
    var clipTileCoords = this.clipTileCoords_;
    var tileCoord;
    for (i = renderables.length - 1; i >= 0; --i) {
      tileCoord = renderables[i].getTileCoord();
      tileGrid.forEachTileCoordParentTileRange(tileCoord,
          function(z, tileRange) {
            var tiles = tilesToDrawByZ[z];
            if (tiles) {
              var key, tile;
              for (key in tiles) {
                tile = tiles[key];
                if (tileRange.contains(tile.getTileCoord()) &&
                    tile.getState() == ol.TileState.LOADED) {
                  if (!(key in clipTileCoords)) {
                    clipTileCoords[key] = [];
                  }
                  clipTileCoords[key].push(tileCoord);
                  return true;
                }
              }
            }
            return false;
          }, this, tmpTileRange, tmpExtent);
    }
  }

  this.updateUsedTiles(frameState.usedTiles, tileSource, z, tileRange);
  this.manageTilePyramid(frameState, tileSource, tileGrid, pixelRatio,
      projection, extent, z, tileLayer.getPreload());
  this.scheduleExpireCache(frameState, tileSource);
  this.updateLogos(frameState, tileSource);

  return true;
};


/**
 * @inheritDoc
 */
ol.renderer.canvas.TileLayer.prototype.forEachLayerAtPixel = function(
    pixel, frameState, callback, thisArg) {
  var canvas = this.context_.canvas;
  var size = frameState.size;
  canvas.width = size[0];
  canvas.height = size[1];
  this.composeFrame(frameState, this.getLayer().getLayerState(), this.context_);

  var imageData = this.context_.getImageData(
      pixel[0], pixel[1], 1, 1).data;

  if (imageData[3] > 0) {
    return callback.call(thisArg, this.getLayer());
  } else {
    return undefined;
  }
};
