import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import DeleteTodo from './delete-todo-container';


class ReadTodo extends Component {
    constructor(props) {
        super(props);
        console.log('Read:', this.props)
    }



    render() {
        const match = this.props.match
        let storage = this.props.tempStorage
        let id = this.props.match.params.id
        let body = storage.find(todo => todo.id === parseInt(id))

        return (
            <div>
                {body.newBody}
                <div>
                    <button><Link to={`${match.url}/${id}`}>Delete</Link></button>
                    <Route path={`${match.url}/:id`}
                        render={(props) => <DeleteTodo {...props} />}
                    />
                    <Route exact path={match.url} />
                </div>

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