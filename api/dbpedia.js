var getAnimalQuery = function(params){
  var genus = params.genus; 
    var url = "http://dbpedia.org/sparql";
    var query = "\
    PREFIX dbpedia2: <http://dbpedia.org/property/>\
    PREFIX foaf: <http://xmlns.com/foaf/0.1/>\
    PREFIX dbpedia: <http://dbpedia.org/resource/>\
    PREFIX dbpedia-owl: <http://dbpedia.org/ontology/>\
    SELECT ?animal ?animal_name ?description ?photo\
    WHERE {\
        ?animal rdf:type <http://dbpedia.org/ontology/Animal>.\
        ?animal foaf:name ?animal_name.\
        ?animal dbpedia-owl:abstract ?description.\
        ?animal dbpedia-owl:thumbnail ?photo.\
        ?animal dbpedia-owl:class dbpedia:" + params.animalClass + ". " +
        "FILTER (LANG(?description)='en')\
    } limit 25";
  return encodeURI( url+"?query="+query+"&format=json" );
}

module.exports = {
	getAnimals: getAnimalQuery
}