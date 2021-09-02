import React from "react";
class Age extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.age}</p>
        <button onClick={this.props.handleIncrement}>Increment</button>
        <button onClick={this.props.handleDecrement}>Decreament</button>
      </div>
    );
  }
}
export default Age;
