import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { create_New } from "../actions/create-actions";

class CreateTodo extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const title = this.getTitle.value;
    const body = this.getBody.value;
    this.props.onCreateNew(title, body);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input required type="text" ref={input => (this.getTitle = input)} />
          <textarea required ref={input => (this.getBody = input)} />
          <button type="submit">Create Todo</button>
        </form>
        {this.props.title}
        {this.props.body}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    title: state.createReducer.title,
    body: state.createReducer.body,
    id: state.createReducer.id
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      onCreateNew: create_New
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateTodo);
