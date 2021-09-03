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
        <span>{this.props.fname} </span>
        <span>{this.props.lname}</span>
        <br />
        <input
          type="text"
          value={this.props.fname}
          onChange={this.props.fnameChange}
        />
        <input
          type="text"
          value={this.props.lname}
          onChange={this.props.lnameChange}
        />
        <p>{this.props.age}</p>
        <input
          type="button"
          value="Increment"
          onClick={this.props.incrementHandler}
        />
        <input
          type="button"
          value="Decrement"
          onClick={this.props.decrementHandler}
        />
      </React.Fragment>
    );
  }
}

export default Students;
