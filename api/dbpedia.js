var React = require('react'); 
var ComponentGallery = require('react-component-gallery'); 
    var url = "http://dbpedia.org/sparql";
    var query = "\
    PREFIX dbpedia2: <http://dbpedia.org/property/>\
    PREFIX foaf: <http://xmlns.com/foaf/0.1/>\
    SELECT ?o\
    WHERE {\
        ?s dbpedia2:genus \"Panthera\"@en;\
            foaf:depiction ?o\
    }";
var queryUrl = encodeURI( url+"?query="+query+"&format=json" );