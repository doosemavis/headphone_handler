import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getBrands } from './actions/brands.js';
import BrandForm from './containers/BrandForm.js';

class App extends Component {
  
  componentDidMount() {
    this.props.getBrands()
  }

  render() {
    console.log("Rendering")
    const brandsLis = this.props.brands.map((br) => <li key={br.id}>{br.name}</li>)

    return (
      <div className="App">
        <h2>Create Brands</h2>
        <BrandForm/>
        <hr/>
        <h2>Headphone Brands</h2>
          <ol>
              {this.props.loading ? <h3>Loading. . .</h3> : brandsLis}
          </ol>
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

export default connect(mapStateToProps, { getBrands })(App);
