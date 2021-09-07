import React from "react";

class NewBook extends React.Component {
  render() {
    return (
      <div>
        <p>title: </p>
        <input
          type="text"
          value={this.props.title}
          onChange={this.props.new_book_title}
        />
        <p>author: </p>
        <input
          type="text"
          value={this.props.author}
          onChange={this.props.new_book_author}
        />
        <p>stock: </p>
        <input
          type="number"
          value={this.props.stock}
          onChange={this.props.new_book_stock}
        />
      </div>
    );
  }
}

export default NewBook;
