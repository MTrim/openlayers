ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:31256").setExtent([35570.305130, 341929.215289, 38565.244795, 344148.468210]);
var wms_layers = [];


    var projection_GeolandBasemapOrthofoto_0 = ol.proj.get('EPSG:3857');
    var projectionExtent_GeolandBasemapOrthofoto_0 = projection_GeolandBasemapOrthofoto_0.getExtent();
    var size_GeolandBasemapOrthofoto_0 = ol.extent.getWidth(projectionExtent_GeolandBasemapOrthofoto_0) / 256;
    var resolutions_GeolandBasemapOrthofoto_0 = new Array(14);
    var matrixIds_GeolandBasemapOrthofoto_0 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_GeolandBasemapOrthofoto_0[z] = size_GeolandBasemapOrthofoto_0 / Math.pow(2, z);
        matrixIds_GeolandBasemapOrthofoto_0[z] = z;
    }
    var lyr_GeolandBasemapOrthofoto_0 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                              url: "https://maps.wien.gv.at/basemap/1.0.0/WMTSCapabilities.xml",
    attributions: ' ',
                                "layer": "bmaporthofoto30cm",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/jpeg',
              projection: projection_GeolandBasemapOrthofoto_0,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_GeolandBasemapOrthofoto_0),
                resolutions: resolutions_GeolandBasemapOrthofoto_0,
                matrixIds: matrixIds_GeolandBasemapOrthofoto_0
              }),
              style: 'normal',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: "Geoland Basemap Orthofoto",
                            opacity: 1.0,
                            
                            
                          });

    var projection_BasemapHighDPI_1 = ol.proj.get('EPSG:3857');
    var projectionExtent_BasemapHighDPI_1 = projection_BasemapHighDPI_1.getExtent();
    var size_BasemapHighDPI_1 = ol.extent.getWidth(projectionExtent_BasemapHighDPI_1) / 256;
    var resolutions_BasemapHighDPI_1 = new Array(14);
    var matrixIds_BasemapHighDPI_1 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_BasemapHighDPI_1[z] = size_BasemapHighDPI_1 / Math.pow(2, z);
        matrixIds_BasemapHighDPI_1[z] = z;
    }
    var lyr_BasemapHighDPI_1 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                              url: "https://maps.wien.gv.at/basemap/1.0.0/WMTSCapabilities.xml",
    attributions: ' ',
                                "layer": "bmaphidpi",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/jpeg',
              projection: projection_BasemapHighDPI_1,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_BasemapHighDPI_1),
                resolutions: resolutions_BasemapHighDPI_1,
                matrixIds: matrixIds_BasemapHighDPI_1
              }),
              style: 'normal',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: "Basemap High DPI",
                            opacity: 1.0,
                            
                            
                          });

    var projection_GeolandBasemapGrau_2 = ol.proj.get('EPSG:3857');
    var projectionExtent_GeolandBasemapGrau_2 = projection_GeolandBasemapGrau_2.getExtent();
    var size_GeolandBasemapGrau_2 = ol.extent.getWidth(projectionExtent_GeolandBasemapGrau_2) / 256;
    var resolutions_GeolandBasemapGrau_2 = new Array(14);
    var matrixIds_GeolandBasemapGrau_2 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_GeolandBasemapGrau_2[z] = size_GeolandBasemapGrau_2 / Math.pow(2, z);
        matrixIds_GeolandBasemapGrau_2[z] = z;
    }
    var lyr_GeolandBasemapGrau_2 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                              url: "https://maps.wien.gv.at/basemap/1.0.0/WMTSCapabilities.xml",
    attributions: ' ',
                                "layer": "bmapgrau",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/png',
              projection: projection_GeolandBasemapGrau_2,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_GeolandBasemapGrau_2),
                resolutions: resolutions_GeolandBasemapGrau_2,
                matrixIds: matrixIds_GeolandBasemapGrau_2
              }),
              style: 'normal',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: "Geoland Basemap Grau",
                            opacity: 1.0,
                            
                            
                          });

        var lyr_OpenStreetMap_3 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Reserve_4 = new ol.format.GeoJSON();
var features_Reserve_4 = format_Reserve_4.readFeatures(json_Reserve_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31256'});
var jsonSource_Reserve_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Reserve_4.addFeatures(features_Reserve_4);
var lyr_Reserve_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Reserve_4, 
                style: style_Reserve_4,
                interactive: true,
                title: '<img src="styles/legend/Reserve_4.png" /> Reserve'
            });
var format_Trasse_5 = new ol.format.GeoJSON();
var features_Trasse_5 = format_Trasse_5.readFeatures(json_Trasse_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31256'});
var jsonSource_Trasse_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trasse_5.addFeatures(features_Trasse_5);
var lyr_Trasse_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Trasse_5, 
                style: style_Trasse_5,
                interactive: true,
                title: '<img src="styles/legend/Trasse_5.png" /> Trasse'
            });
var format_Hausanschluss_6 = new ol.format.GeoJSON();
var features_Hausanschluss_6 = format_Hausanschluss_6.readFeatures(json_Hausanschluss_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31256'});
var jsonSource_Hausanschluss_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hausanschluss_6.addFeatures(features_Hausanschluss_6);
var lyr_Hausanschluss_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hausanschluss_6, 
                style: style_Hausanschluss_6,
                interactive: true,
                title: '<img src="styles/legend/Hausanschluss_6.png" /> Hausanschluss'
            });
var format_Leitung_7 = new ol.format.GeoJSON();
var features_Leitung_7 = format_Leitung_7.readFeatures(json_Leitung_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31256'});
var jsonSource_Leitung_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Leitung_7.addFeatures(features_Leitung_7);
var lyr_Leitung_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Leitung_7, 
                style: style_Leitung_7,
                interactive: true,
                title: '<img src="styles/legend/Leitung_7.png" /> Leitung'
            });
var format_Kabelkasten_8 = new ol.format.GeoJSON();
var features_Kabelkasten_8 = format_Kabelkasten_8.readFeatures(json_Kabelkasten_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31256'});
var jsonSource_Kabelkasten_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kabelkasten_8.addFeatures(features_Kabelkasten_8);
var lyr_Kabelkasten_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kabelkasten_8, 
                style: style_Kabelkasten_8,
                interactive: true,
                title: '<img src="styles/legend/Kabelkasten_8.png" /> Kabelkasten'
            });
var format_Messpunkte_9 = new ol.format.GeoJSON();
var features_Messpunkte_9 = format_Messpunkte_9.readFeatures(json_Messpunkte_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31256'});
var jsonSource_Messpunkte_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Messpunkte_9.addFeatures(features_Messpunkte_9);
var lyr_Messpunkte_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Messpunkte_9, 
                style: style_Messpunkte_9,
                interactive: false,
                title: '<img src="styles/legend/Messpunkte_9.png" /> Messpunkte'
            });

lyr_GeolandBasemapOrthofoto_0.setVisible(true);lyr_BasemapHighDPI_1.setVisible(true);lyr_GeolandBasemapGrau_2.setVisible(true);lyr_OpenStreetMap_3.setVisible(true);lyr_Reserve_4.setVisible(true);lyr_Trasse_5.setVisible(true);lyr_Hausanschluss_6.setVisible(true);lyr_Leitung_7.setVisible(true);lyr_Kabelkasten_8.setVisible(true);lyr_Messpunkte_9.setVisible(false);
var layersList = [lyr_GeolandBasemapOrthofoto_0,lyr_BasemapHighDPI_1,lyr_GeolandBasemapGrau_2,lyr_OpenStreetMap_3,lyr_Reserve_4,lyr_Trasse_5,lyr_Hausanschluss_6,lyr_Leitung_7,lyr_Kabelkasten_8,lyr_Messpunkte_9];
lyr_Reserve_4.set('fieldAliases', {'fid': 'fid', 'Kabeltyp': 'Kabeltyp', 'Bemerkung': 'Bemerkung', 'Hinweis': 'Hinweis', 'Laenge': 'Laenge', });
lyr_Trasse_5.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparen': 'transparen', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', 'Laenge': 'Laenge', });
lyr_Hausanschluss_6.set('fieldAliases', {'fid': 'fid', 'Kabeltyp': 'Kabeltyp', 'Bemerkung': 'Bemerkung', 'Hinweis': 'Hinweis', 'Laenge': 'Laenge', });
lyr_Leitung_7.set('fieldAliases', {'fid': 'fid', 'Kabeltyp': 'Kabeltyp', 'Bemerkung': 'Bemerkung', 'Hinweis': 'Hinweis', 'Laenge': 'Laenge', });
lyr_Kabelkasten_8.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'kastentyp': 'kastentyp', 'bild': 'bild', 'bemerkung': 'bemerkung', 'winkel': 'winkel', 'pid': 'pid', });
lyr_Messpunkte_9.set('fieldAliases', {'fid': 'fid', 'id_0': 'id_0', 'id': 'id', });
lyr_Reserve_4.set('fieldImages', {'fid': '', 'Kabeltyp': '', 'Bemerkung': '', 'Hinweis': '', 'Laenge': '', });
lyr_Trasse_5.set('fieldImages', {'fid': 'TextEdit', 'handle': 'TextEdit', 'block': 'TextEdit', 'etype': 'TextEdit', 'space': 'TextEdit', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'TextEdit', 'color24': 'TextEdit', 'transparen': 'TextEdit', 'lweight': 'TextEdit', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'TextEdit', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', 'Laenge': 'TextEdit', });
lyr_Hausanschluss_6.set('fieldImages', {'fid': 'TextEdit', 'Kabeltyp': 'ValueMap', 'Bemerkung': 'TextEdit', 'Hinweis': 'TextEdit', 'Laenge': 'TextEdit', });
lyr_Leitung_7.set('fieldImages', {'fid': 'TextEdit', 'Kabeltyp': 'ValueMap', 'Bemerkung': 'TextEdit', 'Hinweis': 'TextEdit', 'Laenge': 'Range', });
lyr_Kabelkasten_8.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'kastentyp': 'ValueMap', 'bild': 'TextEdit', 'bemerkung': 'TextEdit', 'winkel': 'TextEdit', 'pid': 'TextEdit', });
lyr_Messpunkte_9.set('fieldImages', {'fid': 'TextEdit', 'id_0': 'TextEdit', 'id': 'TextEdit', });
lyr_Reserve_4.set('fieldLabels', {'fid': 'no label', 'Kabeltyp': 'no label', 'Bemerkung': 'no label', 'Hinweis': 'no label', 'Laenge': 'no label', });
lyr_Trasse_5.set('fieldLabels', {'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'olinetype': 'no label', 'linetype': 'no label', 'color': 'no label', 'ocolor': 'no label', 'color24': 'no label', 'transparen': 'no label', 'lweight': 'no label', 'linewidth': 'no label', 'ltscale': 'no label', 'visible': 'no label', 'width': 'no label', 'thickness': 'no label', 'ext': 'no label', 'Laenge': 'inline label', });
lyr_Hausanschluss_6.set('fieldLabels', {'fid': 'no label', 'Kabeltyp': 'inline label', 'Bemerkung': 'inline label', 'Hinweis': 'no label', 'Laenge': 'inline label', });
lyr_Leitung_7.set('fieldLabels', {'fid': 'header label', 'Kabeltyp': 'inline label', 'Bemerkung': 'inline label', 'Hinweis': 'no label', 'Laenge': 'inline label', });
lyr_Kabelkasten_8.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'kastentyp': 'inline label', 'bild': 'no label', 'bemerkung': 'inline label', 'winkel': 'no label', 'pid': 'no label', });
lyr_Messpunkte_9.set('fieldLabels', {'fid': 'no label', 'id_0': 'no label', 'id': 'no label', });
lyr_Messpunkte_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});