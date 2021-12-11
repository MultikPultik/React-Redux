import React from "react";
import ReactDOM from "react-dom";

import AppHeader from "./components/app-header";
import AppInput from "./components/app-input";
import AppList from "./components/app-list";
import AppItemFilters from "./components/app-item-filters";

import "./index.css";

const App = () => {
  const appData = [
    { label: "Drink Coffee", important: false, id: 0 },
    { label: "Make good anyware", important: true, id: 1 },
    { label: "Have a lunch", important: false, id: 2 },
  ];
  return (
    <div className="container">
      <AppHeader toDo = {1} done = {3}/>
      <div className="top-panel d-flex">
        <AppInput />
        <AppItemFilters />
      </div>
      <AppList data={appData} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
