import React from "react";

import "./app-input.css";

const AppInput = ({ data, onFindData }) => {
  // const {data} ;

  const onChange = (e) => {
    onFindData(e.target.value)
  };

  return (
    <input
      className="form-control search-input"
      placeholder="search"
      onChange={onChange}
    ></input>
  );
};

// export default class AppInput extends React.Component {

//   onChange(e){
//     const {data} = this.props;
//     // const newData = data

//     console.log(data);
//   }

//   render(){

//     return (
//       <input
//         className="form-control search-input"
//         placeholder="search"
//         onChange={this.onChange}
//       ></input>
//     );
//   }
// }

export default AppInput;
