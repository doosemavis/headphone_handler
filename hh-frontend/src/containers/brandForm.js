import React, { Component } from 'react'

export default class BrandForm extends Component {
    state = {
        brand: {
            name: "",
        }
    }

    handleOnChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        const brand = {...this.state.brand}
        console.log(brand)
    }
    
    render() {
        return (
            <form onSubmit={this.handleOnSubmit}>
                <input 
                type="text"
                value={this.state.brand.name}
                onChange={this.handleOnChange}
                />
                <button type="submit">Add Brand</button>
            </form>
        )
    }
}
