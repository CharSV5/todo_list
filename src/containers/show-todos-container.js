import React from 'react';
import { Link, Route } from 'react-router-dom';

const ShowTodos = ({ match, tempStorage }) => {


    let titlesList = tempStorage.map((todo) => {
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
                <h3>Todos</h3>
                <ul>{titlesList}</ul>
            </div>
            <Route path={`${match.url}/:id`}
                render={(props) => <ShowTodos {...props} />}
            />
        </div>
    )
}

export default ShowTodos