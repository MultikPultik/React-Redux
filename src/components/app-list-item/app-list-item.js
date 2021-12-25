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
      this.setState({
        done: true
      })
  };
  
  render() {

    const { label, important = false } = this.props;
    const {done} = this.state;
    const style = {
      color: important ? "steelblue" : "black",
    };
    
    let classNames = 'app-list-item-label';
    if (done){
      classNames += ' done'
    }

    return (
      <span className="app-list-item">
        <span
          style={style}
          className={classNames}
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
