import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ReadTodo from './read-todo-container';
import { show_Todo } from "../actions/storage-actions";



class ShowTodos extends Component {
    constructor(props) {
        super(props);
        console.log('show', this.props)
    }

    render() {
        const match = this.props.match
        let titlesList = this.props.tempStorage.map((todo) => {
            return (
                <li key={todo.id}>
                    <Link to={`${match.url}/${todo.id}`}>
                        {todo.newTitle}
                    </Link>
                </li>
            )
        })
        return (
            <div>
                <div>
                    <h4>Click on a todo to read</h4>
                    {titlesList}
                </div>
                <button>
                    <Link to="/createTodo">Create Todo</Link>
                </button>
                <Route path={`${match.url}/:id`}
                    render={(props) => <ReadTodo {...props} />}
                />
                <Route exact path={match.url} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tempStorage: state.storageReducer.tempStorage
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        onShowTodo: show_Todo
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowTodos)