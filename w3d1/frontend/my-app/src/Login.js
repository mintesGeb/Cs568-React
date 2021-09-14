import axios from "axios";
import React from "react";

class Login extends React.Component {
  state = { user: { username: "", password: "" } };

  changeLoginInfo = (event) => {
    let copy = { ...this.state.user };
    copy[event.target.name] = event.target.value;
    this.setState({ user: copy });
  };
  loginClicked = () => {
    axios.post("/login", this.state.user).then((response) => {
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("username", this.state.user.username);
        this.props.history.push("/products");
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
          type="password"
          value={this.state.user.password}
          name="password"
          onChange={(event) => this.changeLoginInfo(event)}
        />
        <input type="button" value="login" onClick={this.loginClicked} />
      </div>
    );
  }
}

export default Login;
