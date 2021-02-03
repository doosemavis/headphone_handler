import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import BrandContainer from './containers/BrandContainer.js';

class App extends Component {

  render() {
    console.log("Rendering")

    return (
      <Router>
        <Route exact path="/" component={BrandContainer}/>
        <Route exact path="/brands" />
        <Route exact path="/headphones" />
      </Router>
    );
  }
}


export default App;
