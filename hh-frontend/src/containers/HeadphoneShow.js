import React, { Component } from 'react'
import { connect } from 'react-redux';
// import { getHeadphones } from '../actions/headphones.js';
// import Headphone from '../components/Headphone.js';

class HeadphoneShow extends Component {
    
    render() {
        const headphone = this.props.headphones.find((h) => `${h.id}` === this.props.match.params.id )
        
        return (
            <div>
                <br></br>
                <hr/>
                <h2>Name: {headphone.name}</h2>
                <h3>Price: ${headphone.price} USD</h3>
                <h3>Weight: {headphone.weight}oz</h3>
                <h3>Description: {headphone.description}</h3>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("I am state", state)
    return {
      headphones: state.headphoneReducer.headphones
    }
  }

export default connect(mapStateToProps)(HeadphoneShow);