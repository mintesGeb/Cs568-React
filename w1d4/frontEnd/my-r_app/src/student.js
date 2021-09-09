import React from "react";
class Students extends React.Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <p>
          <i>
            <b>{this.props.children}</b>
          </i>
        </p>

        <br />
        <span>{this.props.fname} </span>
        <span>{this.props.lname}</span>
        <br />

        <p>{this.props.location}</p>
        <p>{this.props.age}</p>
        <button onClick={this.props.detailStudent}>Detail</button>
        <button onClick={this.props.deleteStudent}>Delete</button>

        <br />
      </React.Fragment>
    );
  }
}

export default Students;
