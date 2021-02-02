import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    const brandsLis = this.props.brands.map((br) => <li key={br.id}>{br.name}</li>)

    return (
      <div className="App">
        <h2>Headphone Brands</h2>
        <hr/>
        <h2>Create Brands</h2>
        {this.props.loading ? <h3>Loading. . .</h3> : brandsLis}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("I am state", state)
  return {
    brands: state.brandReducer.brands,
    loading: state.brandReducer.loading,
  }
}

export default connect(mapStateToProps)(App);
