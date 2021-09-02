import React from "react";

class LastName extends React.Component {
  render() {
    return (
      <div>
        <p>
          {this.props.children}
          {this.props.lname}
        </p>
      </div>
    );
  }
}
export default LastName;
