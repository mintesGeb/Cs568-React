import React from "react";

class Counter1 extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <p>{this.props.value}</p>
        <input
          type="button"
          value="increment"
          onClick={this.props.incrementHandler}
        />
        <input
          type="button"
          value="decrement"
          onClick={this.props.decrementHandler}
        />
      </div>
    );
  }
}

export default Counter1;
