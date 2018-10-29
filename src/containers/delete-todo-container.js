import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class DeleteTodo extends Component {
    constructor(props) {
        super(props);
        console.log('Delete', this.props)
    }

    render() {

        let storage = this.props.tempStorage
        let id = this.props.match.params.id
        let body = storage.find(todo => todo.id === parseInt(id))


        return (
            <div>
                <div>
                    {body.newTitle}
                </div>
                <div>
                    {body.newBody}
                </div>
                Are you sure you want to delete?
                <button>Yes</button>
                <button>No</button>
            </div>
        )
    }

}
const mapStateToProps = state => {
    return {
        tempStorage: state.storageReducer.tempStorage
    }
}


export default connect(mapStateToProps)(DeleteTodo)
