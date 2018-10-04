import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// import UpdateTodo from './update-todo-container';

const UpdateTodo = () => (
    <div>
        <h2>This is Update Todo</h2>
    </div>
)

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
                    <h4>Click on a todo to update or delete</h4>
                    {titlesList}
                </div>
                <Link to="/createTodo">Create Todo</Link>
                <Route path={`${match.url}/:id`}
                    render={(props) => <UpdateTodo {...props} />}
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

export default connect(mapStateToProps)(ShowTodos)