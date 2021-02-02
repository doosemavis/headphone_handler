import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Our Brands</h2>
      </div>
    );
  }
}

export default connect()(App);
