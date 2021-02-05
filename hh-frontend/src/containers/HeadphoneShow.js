import React, { Component } from 'react'
import { connect } from 'react-redux';

class HeadphoneShow extends Component {
    render() {
        const headphone = this.props.headphones.find((h) => `${h.id}` === this.props.match.params.id )
        
        return (
            <div>
                {headphone.name}
                {headphone.price}
                {headphone.weight}
                {headphone.description}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("I am state", state)
    return {
      headphones: state.headphoneReducer.brands
    }
  }

export default connect(mapStateToProps)(HeadphoneShow);