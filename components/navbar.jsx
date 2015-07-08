var React = require('react'); 
var Router = require('react-router'); 
var Link = Router.Link; 

var NavBar = React.createClass({
    render: function(){
      return(
        <nav className="navbar">
          <div className="container">
            <ul className="navbar-list">
              <li className="navbar-item"><Link className="navbar-link navLinkBig" to="/">Zoopedia</Link></li>
            </ul>
          </div>
        </nav>
      ); 
    }
});

module.exports = NavBar; 