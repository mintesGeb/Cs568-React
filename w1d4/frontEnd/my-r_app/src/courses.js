import React from "react";
class Courses extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.id}</p>
        <p>{this.props.name}</p>
        <p>{this.props.rating}</p>
        <p>{this.props.difficulty}</p>
        <input type="button" value="Detail" onClick={this.props.courseDetail} />
        <input type="button" value="Delete" onClick={this.props.courseDelete} />
      </div>
    );
  }
}

export default Courses;
