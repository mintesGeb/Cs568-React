import React from "react";

class Books extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.title}</p>
        <p>{this.props.author}</p>
        <p>{this.props.stock}</p>
        <input type="button" value="delete" onClick={this.props.deleteBook} />
        <input type="button" value="update" onClick={this.props.updateBook} />
      </div>
    );
  }
}

export default Books;
