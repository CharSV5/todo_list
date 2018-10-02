import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { create_New, completed } from "../actions/create-actions";
import { save_Todo } from "../actions/storage-actions";

class CreateTodo extends Component {
  constructor(props) {
    super(props);
    console.log("props", this.props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const title = this.getTitle.value;
    const body = this.getBody.value;
    const newItem = this.props.onCreateNew(title, body);
    this.props.onSaveTodo(newItem);
    this.getTitle.value = "";
    this.getBody.value = "";
    this.props.onCompleted();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input
              required
              type="text"
              ref={input => (this.getTitle = input)}
            />
          </label>
          <br />
          <label>
            Body:
            <textarea required ref={input => (this.getBody = input)} />
          </label>
          <br />
          <button type="submit">Create Todo</button>
        </form>
        {this.props.newItem.title}
        {this.props.newItem.body}
        {this.props.newItem.id}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("state", state);
  return {
    newItem: state.createReducer.newItem,
    tempStorage: state.storageReducer.tempStorage
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      onCreateNew: create_New,
      onCompleted: completed,
      onSaveTodo: save_Todo
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateTodo);
