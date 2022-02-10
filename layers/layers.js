var wms_layers = [];

var lyr_POtry05copycopy_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "POtry05 copy copy",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/POtry05copycopy_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-13674755.159056, 5710842.691491, -13645280.963967, 5720753.388631]
                            })
                        });
var lyr_POtry05copy_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "POtry05 copy",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/POtry05copy_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-13674755.159056, 5710842.691491, -13645280.963967, 5720753.388631]
                            })
                        });
var lyr_POtry05_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "POtry05",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/POtry05_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-13674755.159056, 5710842.691491, -13645280.963967, 5720753.388631]
                            })
                        });
var lyr_POtry05copycopycopy_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "POtry05 copy copy copy",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/POtry05copycopycopy_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-13674755.159056, 5710842.691491, -13645280.963967, 5720753.388631]
                            })
                        });
var format_ForrestParkParkTrails_4 = new ol.format.GeoJSON();
var features_ForrestParkParkTrails_4 = format_ForrestParkParkTrails_4.readFeatures(json_ForrestParkParkTrails_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ForrestParkParkTrails_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ForrestParkParkTrails_4.addFeatures(features_ForrestParkParkTrails_4);
var lyr_ForrestParkParkTrails_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ForrestParkParkTrails_4, 
                style: style_ForrestParkParkTrails_4,
                interactive: true,
    title: 'ForrestPark ParkTrails<br />\
    <img src="styles/legend/ForrestParkParkTrails_4_0.png" /> Lief Erikson Drive<br />\
    <img src="styles/legend/ForrestParkParkTrails_4_1.png" /> Wildwood Trail<br />\
    <img src="styles/legend/ForrestParkParkTrails_4_2.png" /> <br />'
        });

lyr_POtry05copycopy_0.setVisible(true);lyr_POtry05copy_1.setVisible(true);lyr_POtry05_2.setVisible(true);lyr_POtry05copycopycopy_3.setVisible(true);lyr_ForrestParkParkTrails_4.setVisible(true);
var layersList = [lyr_POtry05copycopy_0,lyr_POtry05copy_1,lyr_POtry05_2,lyr_POtry05copycopycopy_3,lyr_ForrestParkParkTrails_4];
lyr_ForrestParkParkTrails_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'TrailName': 'TrailName', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_ForrestParkParkTrails_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'TrailName': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_ForrestParkParkTrails_4.set('fieldLabels', {'OBJECTID': 'no label', 'TrailName': 'header label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_ForrestParkParkTrails_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});