import React, { Component } from "react";
import CreateTodo from "./containers/create-todo-container";
import { Link, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Link to="/">Create Todo</Link>
        <Route exact={true} path="/" component={CreateTodo} />
      </div>
    );
  }
}

export default App;
