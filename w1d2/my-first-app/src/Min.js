import Test from "./test.js";
import React, { Component, Fragment } from "react";
class Mintes extends Component {
  state = {
    name: "mintes",
    age: 30,
  };
  render() {
    return (
      <Fragment>
        <div>List of Students</div>
        <div>
          <Test />
          <h1>{this.state.name}</h1>
          <span>{this.state.age}</span>
        </div>
      </Fragment>
    );
  }
}

// function Mintes() {
//   return (
//     <div>
//         <Test/>
//       <h1>Mintes Gebre</h1>
//       <span>30</span>
//     </div>
//   );
// }

export default Mintes;
