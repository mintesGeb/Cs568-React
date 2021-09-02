import React from "react";

class Student extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.fname}</p>
        <p>{this.props.age}</p>
      </div>
    );
  }
}
export default Student;
