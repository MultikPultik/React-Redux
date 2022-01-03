import React, { Component } from "react";

import AppHeader from "../app-header";
import AppInput from "../app-input";
import AppList from "../app-list";
import AppItemFilters from "../app-item-filters";
import AppAddItem from "../app-add-item/app-add-item";

import "./app.css";

export default class App extends Component {
  newId = 100;

  state = {
    appData: [
      { label: "Drink Coffee", important: false, id: 0 },
      { label: "Make good anyware", important: true, id: 1 },
      { label: "Have a lunch", important: false, id: 2 },
    ],
  };

  deleteItem = (id) => {
    this.setState(({ appData }) => {
      const idx = appData.findIndex((el) => el.id === id);
      return { appData: [...appData.slice(0, idx), ...appData.slice(idx + 1)] };
    });
  };

  addItem = (txt) => {
    const newEl = { label: txt, important: false, id: this.newId++ };

    this.setState(({ appData }) => {
      const newArr = [...appData, newEl];

      return { appData: newArr };
    });
  };

  onToggleImportant = (id) => {
    console.log('Important - ', id);
  }

  onToggleDone = (id) => {
    console.log('Done - ', id);
  }

  render() {
    return (
      <div className="container">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <AppInput />
          <AppItemFilters />
        </div>
        <AppList 
          data={this.state.appData} 
          onDeleted={this.deleteItem} 
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <AppAddItem onAddItem={this.addItem} />
      </div>
    );
  }
}
