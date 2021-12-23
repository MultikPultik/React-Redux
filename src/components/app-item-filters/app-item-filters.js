import React, { Component } from "react";

export default class AppItemFilters extends Component {
  render() {
    return (
      <div
        className="btn-group"
        role="group"
        aria-label="Basic outlined example"
      >
        <button type="button" className="btn btn-outline-primary active">
          All
        </button>
        <button type="button" className="btn btn-outline-secondary">
          Active
        </button>
        <button type="button" className="btn btn-outline-secondary">
          Done
        </button>
      </div>
    );
  }
}
