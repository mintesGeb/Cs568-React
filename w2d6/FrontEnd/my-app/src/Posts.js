import React from "react";
import Post from "./Post";

class Posts extends React.Component {
  state = {
    posts: [
      { id: 1, title: "Marriage", description: "marriage problems today" },
      { id: 2, title: "Yourth", description: "Youth problems today" },
    ],
  };
  render() {
    return (
      <div>
        {this.state.posts.map((post) => {
          return <Post title={post.title} description={post.description} />;
        })}
      </div>
    );
  }
}

export default Posts;
