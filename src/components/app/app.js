import React, { Component } from "react";

import AppHeader from "../app-header";
import AppInput from "../app-input";
import AppList from "../app-list";
import AppItemFilters from "../app-item-filters";
// import AppAddItem from "../app-add-item/app-add-item";
import AppForm from "../app-form";

import "./app.css";

export default class App extends Component {
  newId = 100;

  state = {
    appData: [
      { label: "Drink Coffee", important: false, done: false, id: 0 },
      { label: "Make good anyware", important: true, done: false, id: 1 },
      { label: "Have a lunch", important: false, done: false, id: 2 },
    ],
    appFindData: [],
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

  toggleProp = (id, prop) => {
    this.setState(({ appData }) => {
      const idx = appData.findIndex((el) => el.id === id);
      const oldItem = appData[idx];
      const newItem = { ...oldItem, [prop]: !oldItem[prop] };

      const newArr = [
        ...appData.slice(0, idx),
        newItem,
        ...appData.slice(idx + 1),
      ];
      return { appData: newArr };
    });
  };

  onToggleImportant = (id) => {
    this.toggleProp(id, "important");
  };

  onToggleDone = (id) => {
    this.toggleProp(id, "done");
  };

  onFindData = (searchWord) => {
    console.log(searchWord);
    const newData = this.state.appData.filter((el) => {
      // console.log(el.label.toLowerCase().search(e.target.value));
      return el.label.toLowerCase().includes(searchWord.target.value);
    });

    this.setState({
      appFindData: [...newData],
    });
  };

  render() {
    const todoDone = this.state.appData.filter((el) => el.done).length;
    const todo = this.state.appData.length - todoDone;
    
    return (
      <div className="container">
        <AppHeader toDo={todo} done={todoDone} />
        <div className="top-panel d-flex">
          <AppInput data={this.state.appData} onFindData={this.onFindData} />
          <AppItemFilters />
        </div>
        <AppList
          data={this.state.appFindData}
          // data={this.state.appFindData.length ? this.state.appFindData: this.state.appData}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <AppForm onAddItem={this.addItem} />
        {/* <AppAddItem onAddItem={this.addItem} /> */}
      </div>
    );
  }
}
