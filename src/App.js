import React, { Component } from "react";
import CreateTodo from "./containers/create-todo-container";
import { Route, Switch } from 'react-router-dom';
import Home from "./Home";
import ShowTodos from './containers/show-todos-container';
import ReadTodo from './containers/read-todo-container';

class App extends Component {
  render() {
    return (
      <div>

        <Switch>
          <Route path="/createTodo" component={CreateTodo} />
          <Route path="/showTodos" component={ShowTodos} />
          <Route path="/readTodo" component={ReadTodo} />
          <Route exact path="/" component={Home} />

        </Switch>
      </div>
    );
  }
}

export default App;
