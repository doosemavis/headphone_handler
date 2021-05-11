import React, { Component } from "react";
import { connect } from "react-redux";
import { getHeadphones, addBrandHeadphone } from "../actions/headphones.js";
import Headphone from "../components/Headphone.js";
// import { Link } from 'react-router-dom';

class HeadphoneContainer extends Component {
  componentDidMount() {
    // console.log("Mounted");
    this.props.getHeadphones();
  }

  render() {
    // console.log("Rendering", this.props.headphones);
    const hphoneOls = this.props.headphones.map((hp) => (
      <Headphone headphone={hp} />
    ));

    return (
      <div className="App">
        <h2>Headphones</h2>
        <hr />
        <ol>{this.props.loading ? <h3>Loading. . .</h3> : hphoneOls}</ol>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log("I am state", state);
  return {
    headphones: state.headphoneReducer.headphones,
    loading: state.headphoneReducer.loading,
  };
};

const mapDispatchToProps = {
  getHeadphones,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeadphoneContainer);
