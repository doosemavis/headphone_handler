import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import BrandContainer from './containers/BrandContainer.js';
import BrandShow from './containers/BrandShow.js';
import HeadphoneContainer from './containers/HeadphoneContainer.js';
import HeadphoneShow from './containers/HeadphoneShow.js';
import Home from './components/Home.js';
import Navigation from './components/Navigation.js';

class App extends Component {

  render() {
    console.log("Rendering")

    return (
      <Router>
        <Navigation />
        <div className="conatiner">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/brands" component={BrandContainer}/>
            <Route exact path="/brands/:id" component={BrandShow} />
            <Route exact path="/headphones" component={HeadphoneContainer} />
            <Route exact path="/headphones/:id" component={HeadphoneShow} />
            {/* <Route path="/brands/:brand_id/headphones" component={} /> */}
        </Switch>
        </div>
      </Router>
    );
  }
}


export default App;
