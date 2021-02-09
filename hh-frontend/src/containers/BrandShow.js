import React, { Component } from 'react'
import Navbar from 'react-bootstrap/esm/Navbar';
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
                <br/>
                <h1> {brand.name} Headphones </h1>
                <hr/>
                <br/>
                <h3>Add Headphones</h3>
                <HeadphoneForm brand_id={brand.id}/>
                <br/>
                <hr/>
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