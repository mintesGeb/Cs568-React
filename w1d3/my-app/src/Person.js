import React from "react";

// function Person(props) {
//   return (
//     <div>
//       <span>{props.fName} </span>
//       <span>{props.lName}</span>
//     </div>
//   );
// }

class Person extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.fName}</p>
        <p>{this.props.lName}</p>
        <p>{this.props.children}</p>
      </div>
    );
  }
}
export default Person;
