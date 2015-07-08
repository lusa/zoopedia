var AnimalLinks = require('./animal-links.jsx');
var React = require('react'); 
var Router = require('react-router'); 
var RouteHandler = Router.RouteHandler; 
var Navbar = require('./navbar.jsx'); 

var AppLayout = React.createClass({  
  render() {
    return (
       <div className="container">
          <Navbar/> 
          <div className="row">
            <div className="two columns">
              <AnimalLinks/> 
            </div> 
            <div className="ten columns">
              <RouteHandler/>
            </div> 
          </div> 
      </div>
    );
  }
});

module.exports = AppLayout; 