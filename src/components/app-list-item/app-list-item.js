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

   
  render() {

    const { label, onDeleted, onToggleDone, onToggleImportant, important, done } = this.props;
    let classNames = 'app-list-item';

    if (done){
      classNames += ' done';
    }
    if (important) {
      classNames += ' important';
    }

    return (
      <span className={classNames}>
        <span
          className="app-list-item-label"
          onClick={onToggleImportant}
        >
          {label}
        </span>

        <button type="button" className="btn btn-outline-success float-right"
        onClick={onToggleDone}
        >
          <i className="fas fa-exclamation"></i>
        </button>

        <button 
          type="button" 
          className="btn btn-outline-danger float-right"
          onClick={onDeleted}
        >
          <i className="far fa-trash-alt"></i>
        </button>
      </span>
    );
  }
}
