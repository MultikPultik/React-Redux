import React, { Component } from "react";

import "./app-list-item.css";

export default class AppListItem extends Component {
  
  state = {
    done: false,
  }

  //Это старый способ вытащить this
  // constructor() {
  //   super();
  //   this.onLabelClick = () => {
  //     console.log(`${this.props.label}`);
  //   };
  // }

  //это новый способ. Заменяет constructor и super
  onLabelClick = () => {
      // console.log(`${this.props.label}`);
      this.setState(({done})=>{
        return {
          done: !done,
        }
      })
  };

  onMarkImportant = () => {
    this.setState((state)=>{
      return {important: !state.important}
    })
  }
  
  render() {

    const { label, onDeleted } = this.props;
    const {done, important} = this.state;
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
          onClick={this.onLabelClick}
        >
          {label}
        </span>

        <button type="button" className="btn btn-outline-success float-right"
        onClick={this.onMarkImportant}
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
