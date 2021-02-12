import React, { Component } from 'react'
// import { getHeadphones } from '../actions/headphones.js';
import { connect } from 'react-redux';
// import Headphone from '../components/Headphone.js';

class HeadphoneShow extends Component {
    // componentDidMount() {
    //     this.props.getHeadphones();
    // }
    
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