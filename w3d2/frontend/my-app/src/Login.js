import axios from "axios";
import React from "react";
// import axios from "axios";
import "./App.css";

class Login extends React.Component {
  state = { user: { username: "", password: "" } };

  loginInfo = (event) => {
    let copy = { ...this.state.user };
    copy[event.target.name] = event.target.value;
    this.setState({ user: copy });
  };

  loginInfoSubmitted = () => {
    axios.post("/login", this.state.user).then((response) => {
      console.log(response.data);
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("username", this.state.user.username);
      }
    });
  };

  render() {
    return (
      <div className="login">
        <h2 className="title">Login</h2>
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={(event) => this.loginInfo(event)}
        />
        {/* <br /> */}
        <input
          type="text"
          name="password"
          placeholder="password"
          onChange={(event) => this.loginInfo(event)}
        />
        {/* <br /> */}
        <input
          className="general-margin"
          type="button"
          value="Submit"
          onClick={() => this.loginInfoSubmitted()}
        />
      </div>
    );
  }
}

export default Login;
