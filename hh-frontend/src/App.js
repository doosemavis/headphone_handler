import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import BrandContainer from './containers/BrandContainer.js';
import HeadphoneContainer from './containers/HeadphoneContainer.js';

class App extends Component {

  render() {
    console.log("Rendering")

    return (
      <Router>
        <div className="conatiner">
          <nav>
              <Link to="/">Home</Link>
              <br/>
              <Link to="/headphones">Headphones</Link>
          </nav>
          <Switch>
            <Route exact path="/" component={BrandContainer}/>
            <Route exact path="/brands" />
            <Route exact path="/headphones" component={HeadphoneContainer} />
        </Switch>
        </div>
      </Router>
    );
  }
}


export default App;
