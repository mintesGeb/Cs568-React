import React from "react";

class Post extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.title}</p>
        <p>{this.props.description}</p>
        <hr />
      </div>
    );
  }
}

export default Post;
