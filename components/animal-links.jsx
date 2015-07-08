var AnimalClasses = ['Bird', 'Reptile', 'Mammal', 'Marsupial', 'Insect', 'Barnacle', 'Coleoidea', 'Malacostraca'];
var React = require('react'); 
var Router = require('react-router'); 
var Link = Router.Link; 

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

module.exports = AnimalLinks; 