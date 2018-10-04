import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { update_Todo } from "../actions/storage-actions";

class UpdateTodo extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>{this.props.tempStorage.newBody}</div>
        )
    }
}

const mapStateToProps = state => {
    return {
        tempStorage: state.storageReducer.tempStorage
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        onUpdateTodo: update_Todo
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateTodo)