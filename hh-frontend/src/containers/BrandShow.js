import React, { Component } from 'react'
import { connect } from 'react-redux';
import Headphone from '../components/Headphone';
import HeadphoneForm from './HeadphoneForm';

class BrandShow extends Component {
    render() {
        console.log("How ya doin?")
        const brand = this.props.brands.find((b) => `${b.id}` === this.props.match.params.id )
        const headphoneOls = brand.headphones.map((h) => <Headphone headphone={h}/> )
        return (
            <div>
                <h1> {brand.name} Headphones </h1>
                <h2>Add Headphones</h2>
                <HeadphoneForm brand_id={brand.id}/>
                <ol>
                    {headphoneOls}
                </ol>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("I am state", state)
    return {
      brands: state.brandReducer.brands
    }
  }

export default connect(mapStateToProps)(BrandShow);