import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class ReadTodo extends Component {
    constructor(props) {
        super(props);
        console.log('Read:', this.props)
    }



    render() {
        const match = this.props.match


        return <div>READ</div>

    }
}

const mapStateToProps = state => {
    return {
        tempStorage: state.storageReducer.tempStorage
    }
}





export default connect(mapStateToProps)(ReadTodo)