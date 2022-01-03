import React from "react";

import AppListItem from "../app-list-item";

import "./app-list.css";

const AppList = ({ data, onDeleted, onToggleImportant, onToggleDone }) => {
  const elements = data.map((item) => {
    const { id, ...params } = item;

    return (
      <li key={id} className="list-group-item">
        <AppListItem
          {...params}
          onDeleted={() => {
            onDeleted(id);
          }}
          onToggleImportant={() => {
            onToggleImportant(id);
          }}
          onToggleDone={() => {
            onToggleDone(id);
          }}
        />
      </li>
    );
  });

  return <ul className="list-group app-list">{elements}</ul>;
};

export default AppList;
