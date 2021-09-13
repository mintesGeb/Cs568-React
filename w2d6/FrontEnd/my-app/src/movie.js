import React from "react";
import { withRouter } from "react-router";

class Movie extends React.Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <p>{this.props.title}</p>

        <input type="button" value="Detail" onClick={this.props.showDetail} />
        <hr />
      </div>
    );
  }
}

export default withRouter(Movie);
