import React from "react";

import AppHeader from "../app-header";
import AppInput from "../app-input";
import AppList from "../app-list";
import AppItemFilters from "../app-item-filters";

import "./app.css";

const App = () => {
  const appData = [
    { label: "Drink Coffee", important: false, id: 0 },
    { label: "Make good anyware", important: true, id: 1 },
    { label: "Have a lunch", important: false, id: 2 },
  ];
  return (
    <div className="container">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <AppInput />
        <AppItemFilters />
      </div>
      <AppList
        data={appData}
        onDeleted={(id) => {
          console.log("del ", id);
        }}
      />
    </div>
  );
};

export default App;
