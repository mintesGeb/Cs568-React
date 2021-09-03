import React, { Fragment, Component } from "react";
class Photo extends Component {
  render() {
    return (
      <Fragment>
        <img src={this.props.src} alt={this.props.desc} />
        <p>{this.props.children}</p>
      </Fragment>
    );
  }
}
export default Photo;
