ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-6.201255, 9.377569, 2.998970, 15.328726]);
var wms_layers = [];

var format_mapping_2rgion_0 = new ol.format.GeoJSON();
var features_mapping_2rgion_0 = format_mapping_2rgion_0.readFeatures(json_mapping_2rgion_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_mapping_2rgion_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mapping_2rgion_0.addFeatures(features_mapping_2rgion_0);
var lyr_mapping_2rgion_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mapping_2rgion_0, 
                style: style_mapping_2rgion_0,
                popuplayertitle: 'mapping_2 — rgion',
                interactive: true,
    title: 'mapping_2 — rgion<br />\
    <img src="styles/legend/mapping_2rgion_0_0.png" /> BOUCLE DU MOUHOUN<br />\
    <img src="styles/legend/mapping_2rgion_0_1.png" /> CASCADES<br />\
    <img src="styles/legend/mapping_2rgion_0_2.png" /> CENTRE<br />\
    <img src="styles/legend/mapping_2rgion_0_3.png" /> CENTRE-EST<br />\
    <img src="styles/legend/mapping_2rgion_0_4.png" /> CENTRE-NORD<br />\
    <img src="styles/legend/mapping_2rgion_0_5.png" /> CENTRE-OUEST<br />\
    <img src="styles/legend/mapping_2rgion_0_6.png" /> CENTRE-SUD<br />\
    <img src="styles/legend/mapping_2rgion_0_7.png" /> EST<br />\
    <img src="styles/legend/mapping_2rgion_0_8.png" /> HAUTS-BASSINS<br />\
    <img src="styles/legend/mapping_2rgion_0_9.png" /> NORD<br />\
    <img src="styles/legend/mapping_2rgion_0_10.png" /> PLATEAU-CENTRAL<br />\
    <img src="styles/legend/mapping_2rgion_0_11.png" /> SAHEL<br />\
    <img src="styles/legend/mapping_2rgion_0_12.png" /> SUD-OUEST<br />' });
var format_mapping_centroides_1 = new ol.format.GeoJSON();
var features_mapping_centroides_1 = format_mapping_centroides_1.readFeatures(json_mapping_centroides_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_mapping_centroides_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mapping_centroides_1.addFeatures(features_mapping_centroides_1);
var lyr_mapping_centroides_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mapping_centroides_1, 
                style: style_mapping_centroides_1,
                popuplayertitle: 'mapping_centroides',
                interactive: true,
                title: '<img src="styles/legend/mapping_centroides_1.png" /> mapping_centroides'
            });

lyr_mapping_2rgion_0.setVisible(true);lyr_mapping_centroides_1.setVisible(true);
var layersList = [lyr_mapping_2rgion_0,lyr_mapping_centroides_1];
lyr_mapping_2rgion_0.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Nom': 'Nom', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_mapping_centroides_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Nom': 'Nom', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_mapping_2rgion_0.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'Range', 'Nom': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_mapping_centroides_1.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'Range', 'Nom': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_mapping_2rgion_0.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'Nom': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_mapping_centroides_1.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'Nom': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_mapping_centroides_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});