import React, { Component } from 'react'
import HeadphoneForm from './HeadphoneForm.js';
import { connect } from 'react-redux';
import { getHeadphones } from '../actions/headphones.js';
import { Link } from 'react-router-dom';

class HeadphoneContainer extends Component {
    componentDidMount() {
        this.props.getHeadphones()
    }
    
    render() {
        console.log("Rendering")
        const hphoneOls = this.props.headphones.map((hp) => <li key={hp.id}>{hp.name}</li>)
        
    
        return (
            <div className="App">
            <h2>Add Headphones to Brand</h2>
            <HeadphoneForm />
            <hr/>
            <h2>Headphones</h2>
    
                <ol>
                    {this.props.loading ? <h3>Loading. . .</h3> : hphoneOls}
                </ol>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  console.log("I am state", state)
  return {
    headphones: state.headphoneReducer.headphones,
    loading: state.headphoneReducer.loading,
  }
}

export default connect(mapStateToProps, {getHeadphones})(HeadphoneContainer);