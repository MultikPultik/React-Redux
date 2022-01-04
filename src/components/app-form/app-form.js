import React, { Component } from "react";

import "./app-form.css";
export default class AppForm extends Component {
  state = {
    labelText: "",
  };

  onLabelChange = (e) => {
    this.setState({
      labelText: e.target.value,
    });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onAddItem(this.state.labelText);
    this.setState({
      labelText: ''
    })
  };

  render() {
    return (
      <form className="d-flex" onSubmit={this.onFormSubmit}>
        <input
          className="form-control app-form-add"
          type="text"
          placeholder="Что нужно сделать"
          onChange={this.onLabelChange}
          value={this.state.labelText}
          autoFocus
        ></input>

        <button type="submit" className="btn btn-outline-secondary">Add</button>
      </form>
    );
  }
}
