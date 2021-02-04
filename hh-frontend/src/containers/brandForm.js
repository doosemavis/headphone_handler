import React, { Component } from 'react'
import { addBrand } from '../actions/brands.js';
import { connect } from 'react-redux';

class BrandForm extends Component {
    state = {
        brand: {
            name: "",
        }
    }

    handleOnChange = (event) => {
        this.setState({...this.state,
            brand: {...this.state.brand,
                name: event.target.value
            }
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        const brand = {...this.state.brand}
        console.log(brand)
        this.props.addBrand(brand)
        this.setState({
            brand: {
                name: "",
            },
            loading: false
        })
    }
    
    render() {
        return (
            <form onSubmit={this.handleOnSubmit}>
                <input 
                type="text"
                name="brand"
                value={this.state.brand.name}
                onChange={this.handleOnChange}
                />
                <button type="submit">Add Brand</button>
            </form>
        )
    }
}

export default connect(null, {addBrand})(BrandForm);