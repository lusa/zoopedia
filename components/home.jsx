var React = require('react'); 

var Home = React.createClass({
    render() {
        return (
            <div> 
                <h1> Tours running all day </h1> 
                <p> Welcome to Zoopedia. Explore a limited subset of animals found in the jungles of Wikipedia. Each
                of the links correspond to a class of animals. Take your pick, but watch your back. Its a jungle out there.
                </p> 
                <p> Zoopedia is open-source on <a class="" href="https://github.com/lusa/zoopedia"> Github! </a> </p> 
            </div>
        ); 
    }
});

module.exports = Home; 