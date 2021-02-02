import React, { Component } from 'react'

export default class brandForm extends Component {
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
    }
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
