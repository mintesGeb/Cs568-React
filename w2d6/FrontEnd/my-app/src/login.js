import axios from "axios";
import React from "react";
import { withRouter } from "react-router";

class Login extends React.Component {
  state = { user: { username: "", password: "" } };

  componentDidUpdate() {}

  changeLoginInfo = (event) => {
    let copy = { ...this.state.user };
    copy[event.target.name] = event.target.value;
    this.setState({ user: copy });
  };

  loginClicked = () => {
    console.log(this.state.user);
    axios.post("/login", this.state.user).then((response) => {
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);

        console.log(this.props.history.push("/products"));

        console.log("successful");
      } else {
        console.log("no token");
      }
    });
  };

  render() {
    return (
      <div>
        Username:{" "}
        <input
          type="text"
          value={this.state.user.username}
          name="username"
          onChange={(event) => this.changeLoginInfo(event)}
        />
        Password:{" "}
        <input
          type="text"
          value={this.state.user.password}
          name="password"
          onChange={(event) => this.changeLoginInfo(event)}
        />
        <input type="button" value="login" onClick={this.loginClicked} />
      </div>
    );
  }
}

export default withRouter(Login);
