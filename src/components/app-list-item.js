import React from "react";

import "./app-list-item.css";

const AppListItem = ({ label, important = false }) => {
  const style = {
    color: important ? "steelblue" : "black",
  };

  return (
    <span className="app-list-item">
      <span style={style} className="app-list-item-label">{label}</span>
      
      <button type="button" className="btn btn-outline-success float-right">
        <i className="fas fa-exclamation"></i>
      </button>

      <button type="button" className="btn btn-outline-danger float-right">
        <i className="far fa-trash-alt"></i>
      </button>
    </span>
  );
};

export default AppListItem;
