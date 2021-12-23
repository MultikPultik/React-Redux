import React, { Component } from "react";

import "./app-list-item.css";

export default class AppListItem extends Component {
  
  //Это старый способ вытащить this
  // constructor() {
  //   super();
  //   this.onLabelClick = () => {
  //     console.log(`${this.props.label}`);
  //   };
  // }

  //это новый способ. Заменяет constructor и super
  onLabelClick = () => {
      console.log(`${this.props.label}`);
  };

  render() {
    const { label, important = false } = this.props;

    const style = {
      color: important ? "steelblue" : "black",
    };

    return (
      <span className="app-list-item">
        <span
          style={style}
          className="app-list-item-label"
          onClick={this.onLabelClick}
        >
          {label}
        </span>

        <button type="button" className="btn btn-outline-success float-right">
          <i className="fas fa-exclamation"></i>
        </button>

        <button type="button" className="btn btn-outline-danger float-right">
          <i className="far fa-trash-alt"></i>
        </button>
      </span>
    );
  }
}
