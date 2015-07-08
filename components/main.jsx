var React = require('react'); 
var Router = require('react-router'); 
var DefaultRoute = Router.DefaultRoute; 
var Link = Router.Link; 
var Route = Router.Route; 
var RouteHandler = Router.RouteHandler; 
var ZooApp = require('./zoo-app.jsx'); 

var AnimalClasses = ['Bird', 'Reptile', 'Mammal', 'Marsupial', 'Insect', 'Barnacle', 'Cephalopod', 'Coleoidea', 'Malacostraca'];

var Zoo = React.createClass({
    getInitialState: function(){
        console.log('state');
        return {}; 
    },
    componentDidMount: function () {
    console.log('mounted'); 
    // from the path `/inbox/messages/:id`
    // var id = this.props.params.id;
    // fetchMessage(id, function (err, message) {
    //   this.setState({ message: message });
    // })
    },
    render: function(){
        return (<ZooApp animal={this.props.params.animal}/>); 
    }
});

var Navbar = React.createClass({
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

var AnimalLinks = React.createClass({
    render: function(){
        return(
        <ul className="navbar-list"> 
            {AnimalClasses.map(function(animalClass){
                return <li className="navbar-item"><Link className="navbar-link" to={"/" + animalClass}>{animalClass}</Link></li>;
            })}
        </ul>
        ); 
    }
});

var App = React.createClass({  
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

var Home = React.createClass({
    render() {
        return (
            <div> 
                <h1> Tours running all day </h1> 
                <p> Welcome to Zoopedia. Explore a limited subset of animals found in the jungles of Wikipedia. Each
                of the links correspond to a class of animals. Take your pick, but watch your back. It's a jungle out there.
                 </p> 
            </div>
        ); 
    }
}); 


var routes = (  
  <Route path="/" handler={App}>
    <DefaultRoute name="home" handler={Home}/>
    <Route name="animal" path="/:animal" handler={Zoo}/>
  </Route>
);

Router.run(routes, function (Handler) {  
  React.render(<Handler/>, document.body);
});


