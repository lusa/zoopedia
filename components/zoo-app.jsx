var React = require('react'); 
var ComponentGallery = require('react-component-gallery'); 
//var DBPedia = require('../api/dbpedia');

var getAnimalQuery = function(params){
  var genus = params.genus; 
    var url = "http://dbpedia.org/sparql";
    var query = "\
    PREFIX dbpedia2: <http://dbpedia.org/property/>\
    PREFIX foaf: <http://xmlns.com/foaf/0.1/>\
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
//         PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
// PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
// PREFIX foaf: <http://xmlns.com/foaf/0.1/>
// PREFIX dbpedia2: <http://dbpedia.org/property/>
// PREFIX dbpedia-owl: <http://dbpedia.org/ontology/>

// SELECT ?animal ?description ?film_name ?photo WHERE {
//     ?animal rdf:type <http://dbpedia.org/ontology/Animal>.
//     ?animal foaf:name ?film_name.
//     ?animal dbpedia-owl:abstract ?description.
//     ?animal foaf:depiction ?photo.
//     ?animal dbpedia-owl:class dbpedia:Bird.
//     FILTER (LANG(?description)='en')
// }
  return encodeURI( url+"?query="+query+"&format=json" );
}

var sadAnimalPic = 'https://s-media-cache-ak0.pinimg.com/236x/0f/a4/6c/0fa46c125cf2f1924c39722d21f66550.jpg';

var ListItemWrapper = React.createClass({
  render: function() {
    return (
      <div><div className="row"> <img src={this.props.imgSource}/></div>   <div className="row"> <p> {this.props.paragraph} </p> </div>  </div> 
    );
  }
});

var Gallery = React.createClass({
  getInitialState: function(){
    return {
      animals: []
    }
  },
  fetchImages: function(nextProps){
    var fetchProps = nextProps || this.props; 
    $.ajax({
        dataType: "jsonp",  
        url: getAnimalQuery({animalClass: fetchProps.animal}),
        success: function( _data ) {
            var results = _data.results.bindings;
            var animals = [];  
            for ( var i in results ) {
                var photo = results[i].photo.value;
                var abstract = results[i].description.value; 
                animals.push({
                  imgLink: photo, 
                  paragraph: abstract
                });
            }
            this.setState({
              animals: animals.length === 0 ? [{
                paragraph: 'No animals were found!',
                imgLink: sadAnimalPic
              }] : animals
            });
        }.bind(this)
    });
  },
  componentDidMount: function(){
    this.fetchImages(); 
  },
  componentWillReceiveProps: function(nextProps) {
    this.fetchImages(nextProps); 
  },
  render: function () {
    return (
      <div> 
      <h1> {this.props.animal} </h1> 
      <ComponentGallery
        className="example" 
        noMarginBottomOnLastRow={true}
        widthHeightRatio={5/2}
        targetWidth={300}>
        {this.state.animals.map(function(animals) {
           return <ListItemWrapper imgSource={animals.imgLink} paragraph={animals.paragraph}/>;
        })}
      </ComponentGallery>
      </div> 
    );
  }
});
module.exports = Gallery; 

