import React from "react";
import { withRouter } from "react-router";

class Logout extends React.Component {
  login = () => {
    this.props.history.push("/login");
  };
  render() {
    return (
      <div>
        <h2>Logged Out</h2>
        <input type="button" value="Login" onClick={this.login} />
      </div>
    );
  }
}

export default withRouter(Logout);
