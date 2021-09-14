import React from "react";

class Logout extends React.Component {
  logoutClicked = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    // this.props.history.push("/home");
  };

  render() {
    return (
      <div>
        
        <input type="button" value="Logout" onClick={this.logoutClicked} />
      </div>
    );
  }
}
export default Logout;
