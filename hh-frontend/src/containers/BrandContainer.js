import React, { Component } from 'react'
import BrandForm from './BrandForm.js';
import Brand from '../components/Brand.js';
import { connect } from 'react-redux';
import { getBrands, addBrand, addBrandHeadphone } from '../actions/brands.js';


class BrandContainer extends Component {

    componentDidMount() {
        console.log("componentDidMount")
        this.props.getBrands()
    }
    
    render() {
        console.log("Rendering")
        const brandsOls = this.props.brands.map((br, index) => <Brand brand={br} key={index} /> )

        return (
            <div className="App">
            <h2>Create Brands</h2>
            <BrandForm/>
            <hr/>
            <h2>Headphone Brands</h2>
                <ol>
                    {this.props.loading ? <h3>Loading. . .</h3> : brandsOls}
                </ol>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    brands: state.brandReducer.brands,
    loading: state.brandReducer.loading,
  }
}

const mapDispatchToProps = {
    getBrands,
    addBrand,
    addBrandHeadphone
}

export default connect(mapStateToProps, mapDispatchToProps)(BrandContainer);