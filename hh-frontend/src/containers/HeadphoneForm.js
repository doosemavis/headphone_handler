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
            in_stock: true,
        }
    }

    handleOnChange = (event) => {
        this.setState({...this.state,
            headphone: {...this.state.headphone,
                name: event.target.value,
                price: event.target.value,
                weight: event.target.value,
                description: event.target.value,
                in_stock: event.target.value,
            }
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        const headphone = {...this.state.headphone}
        console.log(headphone)
        this.props.addHeadphone(headphone)
        this.setState({
            headphone: {
                name: "",
                price: "",
                weight: "",
                description: "",
                in_stock: true,
            }
            loading: false
        })
    }

    
    
    render() {

        return (
            <form onSubmit={this.handleOnSubmit}>
                <input
                type="text"
                value={this.state.headphone.name}
                onChange={this.handleOnChange}
                />
                <button type="submit">Add Headphone</button>
            </form>
        )
    }
}

export default connect(null, {addHeadphone})(HeadphoneForm);