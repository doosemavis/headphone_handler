import React, { Component } from 'react'
import { addHeadphone } from '../actions/headphones.js';
import { connect } from 'react-redux';


class HeadphoneForm extends Component {
    state = {
        headphone: {
            name: "",
            price: "",
            weight: "",
            description: "",
            // in_stock: true,
        }
    }

    handleOnChange = (event) => {
        this.setState({...this.state,
            headphone: {...this.state.headphone,
                [event.target.name]: event.target.value
            }
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        const headphone = {
            ...this.state.headphone, 
            brand_id: null}
        console.log(headphone)
        this.props.addHeadphone(headphone)
        this.setState({
            headphone: {
                name: "",
                price: "",
                weight: "",
                description: "",
                // in_stock: true,
            },
            loading: false
        })
    }
    
    render() {
        return (
            <form onSubmit={this.handleOnSubmit}>
                Name: <input
                type="text"
                name="name"
                value={this.state.headphone.name}
                onChange={this.handleOnChange}
                />
                <br/>
                Price: <input
                type="text"
                name="price"
                value={this.state.headphone.price}
                onChange={this.handleOnChange}
                />
                <br/>
                Weight (oz): <input
                type="text"
                name="weight"
                value={this.state.headphone.weight}
                onChange={this.handleOnChange}
                />
                <br/>
                Description: <input
                type="text"
                name="description"
                value={this.state.headphone.description}
                onChange={this.handleOnChange}
                />
                <br/>
                {/* In Stock?: <input
                type="checkbox"
                name="in_stock"
                value={this.state.headphone.in_stock}
                onChange={this.handleOnChange}
                /> */}
                <br/>
                <button type="submit">Add Headphone</button>
            </form>
        )
    }
}

export default connect(null, {addHeadphone})(HeadphoneForm);