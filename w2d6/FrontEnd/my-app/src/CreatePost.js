import React from "react";

class CreatePost extends React.Component {
  state = { post: { title: "", description: "" } };

  inputChanged(event) {
    let copy = { ...this.state.post };
    copy[event.target.name] = event.target.value;
    this.setState({ post: copy });
  }
  submit() {
    console.log(this.state.post);
  }
  render() {
    return (
      <div>
        <p>Title: </p>
        <input name="title" onChange={(event) => this.inputChanged(event)} />
        <p>description: </p>
        <input
          name="description"
          onChange={(event) => this.inputChanged(event)}
        />
        <input type="button" value="Submit" onClick={this.submit} />
      </div>
    );
  }
}

export default CreatePost;
