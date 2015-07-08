var React = require('react'); 
var Router = require('react-router'); 
var DefaultRoute = Router.DefaultRoute; 
var Route = Router.Route; 
var Handler = Router.Handler; 

var AnimalGallery = require('./animal-gallery.jsx'); 
var AppLayout = require('./app-layout.jsx'); 
var Home = require('./home.jsx'); 

var GalleryHandler = React.createClass({
    render: function(){
        return (<AnimalGallery animal={this.props.params.animal}/>); 
    }
});

var routes = (  
  <Route path="/" handler={AppLayout}>
    <DefaultRoute name="home" handler={Home}/>
    <Route name="animal" path="/:animal" handler={GalleryHandler}/>
  </Route>
);

Router.run(routes, function (Handler) {  
  React.render(<Handler/>, document.body);
});


