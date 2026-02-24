var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_cont_freguesias_1 = new ol.format.GeoJSON();
var features_cont_freguesias_1 = format_cont_freguesias_1.readFeatures(json_cont_freguesias_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cont_freguesias_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cont_freguesias_1.addFeatures(features_cont_freguesias_1);
var lyr_cont_freguesias_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cont_freguesias_1, 
                style: style_cont_freguesias_1,
                popuplayertitle: 'cont_freguesias',
                interactive: true,
                title: '<img src="styles/legend/cont_freguesias_1.png" /> cont_freguesias'
            });
var format_EstradasporFazer_2 = new ol.format.GeoJSON();
var features_EstradasporFazer_2 = format_EstradasporFazer_2.readFeatures(json_EstradasporFazer_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EstradasporFazer_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EstradasporFazer_2.addFeatures(features_EstradasporFazer_2);
var lyr_EstradasporFazer_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EstradasporFazer_2, 
                style: style_EstradasporFazer_2,
                popuplayertitle: 'Estradas por Fazer',
                interactive: true,
                title: '<img src="styles/legend/EstradasporFazer_2.png" /> Estradas por Fazer'
            });
var format_EstradasjFeitas_3 = new ol.format.GeoJSON();
var features_EstradasjFeitas_3 = format_EstradasjFeitas_3.readFeatures(json_EstradasjFeitas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EstradasjFeitas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EstradasjFeitas_3.addFeatures(features_EstradasjFeitas_3);
var lyr_EstradasjFeitas_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EstradasjFeitas_3, 
                style: style_EstradasjFeitas_3,
                popuplayertitle: 'Estradas já Feitas',
                interactive: true,
                title: '<img src="styles/legend/EstradasjFeitas_3.png" /> Estradas já Feitas'
            });
var format_Fundo_4 = new ol.format.GeoJSON();
var features_Fundo_4 = format_Fundo_4.readFeatures(json_Fundo_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fundo_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fundo_4.addFeatures(features_Fundo_4);
var lyr_Fundo_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fundo_4, 
                style: style_Fundo_4,
                popuplayertitle: 'Fundo',
                interactive: true,
                title: '<img src="styles/legend/Fundo_4.png" /> Fundo'
            });
var group_Continente_CAOP2025 = new ol.layer.Group({
                                layers: [lyr_GoogleSatelliteHybrid_0,lyr_cont_freguesias_1,lyr_EstradasporFazer_2,lyr_EstradasjFeitas_3,lyr_Fundo_4,],
                                fold: 'open',
                                title: 'Continente_CAOP2025'});

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_cont_freguesias_1.setVisible(true);lyr_EstradasporFazer_2.setVisible(true);lyr_EstradasjFeitas_3.setVisible(true);lyr_Fundo_4.setVisible(true);
var layersList = [group_Continente_CAOP2025];
lyr_cont_freguesias_1.set('fieldAliases', {'fid': 'fid', 'dtmnfr': 'dtmnfr', 'freguesia': 'freguesia', 'municipio': 'municipio', 'distrito_ilha': 'distrito_ilha', 'nuts3_cod': 'nuts3_cod', 'nuts3': 'nuts3', 'nuts2': 'nuts2', 'nuts1': 'nuts1', 'area_ha': 'area_ha', 'perimetro_km': 'perimetro_km', 'designacao_simplificada': 'designacao_simplificada', });
lyr_EstradasporFazer_2.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_EstradasjFeitas_3.set('fieldAliases', {'fid': 'fid', });
lyr_Fundo_4.set('fieldAliases', {'fid': 'fid', });
lyr_cont_freguesias_1.set('fieldImages', {'fid': '', 'dtmnfr': 'TextEdit', 'freguesia': 'TextEdit', 'municipio': 'TextEdit', 'distrito_ilha': 'TextEdit', 'nuts3_cod': 'TextEdit', 'nuts3': 'TextEdit', 'nuts2': 'TextEdit', 'nuts1': 'TextEdit', 'area_ha': 'TextEdit', 'perimetro_km': 'Range', 'designacao_simplificada': 'TextEdit', });
lyr_EstradasporFazer_2.set('fieldImages', {'fid': '', 'osm_id': '', 'code': '', 'fclass': '', 'name': '', 'ref': '', 'oneway': '', 'maxspeed': '', 'layer': '', 'bridge': '', 'tunnel': '', });
lyr_EstradasjFeitas_3.set('fieldImages', {'fid': '', });
lyr_Fundo_4.set('fieldImages', {'fid': '', });
lyr_cont_freguesias_1.set('fieldLabels', {'fid': 'no label', 'dtmnfr': 'no label', 'freguesia': 'no label', 'municipio': 'no label', 'distrito_ilha': 'no label', 'nuts3_cod': 'no label', 'nuts3': 'no label', 'nuts2': 'no label', 'nuts1': 'no label', 'area_ha': 'no label', 'perimetro_km': 'no label', 'designacao_simplificada': 'no label', });
lyr_EstradasporFazer_2.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', });
lyr_EstradasjFeitas_3.set('fieldLabels', {'fid': 'no label', });
lyr_Fundo_4.set('fieldLabels', {'fid': 'header label - visible with data', });
lyr_Fundo_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});