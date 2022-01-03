import React, { Component } from "react";

export default class AppAddItem extends Component {
  render() {
    const {onAddItem} = this.props;

    return (
      <button
        type="button"
        className="btn btn-outline-secondary"
        onClick={() => onAddItem('Hello')}
      >
        Add Item
      </button>
    );
  }
}
