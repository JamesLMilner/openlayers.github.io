var styleArray = [new ol.style.Style({
  fill: new ol.style.Fill({
    color: 'rgba(255, 255, 255, 0.6)'
  }),
  stroke: new ol.style.Stroke({
    color: '#319FD3',
    width: 1
  })
})];

var map = new ol.Map({
  layers: [
    new ol.layer.Tile({
      source: new ol.source.MapQuest({layer: 'sat'})
    }),
    new ol.layer.Image({
      source: new ol.source.ImageVector({
        source: new ol.source.GeoJSON({
          url: 'data/countries.geojson'
        }),
        styleFunction: function(feature, resolution) {
          return styleArray;
        }
      })
    })
  ],
  renderers: ol.RendererHints.createFromQueryData(),
  target: 'map',
  view: new ol.View2D({
    center: [0, 0],
    zoom: 1
  })
});
