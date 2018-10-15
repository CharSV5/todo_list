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
        let storage = this.props.tempStorage
        let id = this.props.match.params.id
        let body = storage.find(todo => todo.id === parseInt(id))

        return (
            <div>
                {body.newBody}

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        tempStorage: state.storageReducer.tempStorage
    }
}





export default connect(mapStateToProps)(ReadTodo)