var React = require('react'); 
var ComponentGallery = require('react-component-gallery'); 
var DBPedia = require('../api/dbpedia');

//Sad pic for empty fetches
var sadAnimalPic = 'https://s-media-cache-ak0.pinimg.com/236x/0f/a4/6c/0fa46c125cf2f1924c39722d21f66550.jpg';

var AnimalView = React.createClass({
  render: function() {
    return (
      <div>
        <div className="row"> 
          <img src={this.props.imgSource}/>
        </div>   
        <div className="row"> 
          <p> {this.props.paragraph} </p> 
        </div>  
      </div> 
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
        url: DBPedia.getAnimals({animalClass: fetchProps.animal}),
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
           return <AnimalView imgSource={animals.imgLink} paragraph={animals.paragraph}/>;
        })}
      </ComponentGallery>
      </div> 
    );
  }
});
module.exports = Gallery; 

