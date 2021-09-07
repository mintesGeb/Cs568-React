import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Books from "./Books";
import NewBook from "./newBook";

class App extends React.Component {
  state = {
    books: [
      {
        id: 1,
        title: "God's Love",
        author: "mintes",
        stock: 50,
        isUpdating: false,
      },
      {
        id: 2,
        title: "Discipleship",
        author: "robbie",
        stock: 100,
        isUpdating: false,
      },
    ],
    isShowingBooks: false,
    isAddingNewBook: false,
    isUpdating: false,
    updateBookID: "",
    newBook: {
      id: 3,
      title: "",
      author: "",
      stock: 0,
    },
  };

  showBooks = () => {
    this.setState({ isShowingBooks: !this.state.isShowingBooks });
  };
  deleteBook = (id) => {
    let result = this.state.books.filter((book) => book.id !== id);
    this.setState({ books: result });
  };

  addNewBook = () => {
    this.setState({ isAddingNewBook: !this.state.isAddingNewBook });
  };
  submitNewBook = () => {
    this.state.books.push(this.state.newBook);
    this.setState({
      newBook: {
        id: this.state.newBook.id + 1,
        title: this.state.newBook.title,
        author: this.state.newBook.author,
        stock: this.state.newBook.stock,
      },
    });
  };
  newBookTitle = (event) => {
    this.setState({
      newBook: {
        id: this.state.newBook.id,
        title: event.target.value,
        author: this.state.newBook.author,
        stock: this.state.newBook.stock,
      },
    });
  };
  newBookStock = (event) => {
    this.setState({
      newBook: {
        id: this.state.newBook.id,
        title: this.state.newBook.title,
        author: this.state.newBook.author,
        stock: event.target.value,
      },
    });
  };
  newBookAuthor = (event) => {
    this.setState({
      newBook: {
        id: this.state.newBook.id,
        title: this.state.newBook.title,
        author: event.target.value,
        stock: this.state.newBook.stock,
      },
    });
  };
  updateBook = (id) => {
    this.setState({ isUpdating: !this.state.isUpdating, updateBookID: id });
    console.log(this.state.books.find((book) => book.id === id));
  };

  updateBookTitle = (id, event) => {
    let result = this.state.books.map((book) => {
      if (book.id == id) {
        let copy = { ...book };
        copy.title = event.target.value;
        return copy;
      }
      return book;
    });
    this.setState({ books: result });
  };
  updateBookStock = (id, event) => {
    let result = this.state.books.map((book) => {
      if (book.id === id) {
        let copy = { ...book };
        copy.stock = event.target.value;
        return copy;
      }
      return book;
    });
    this.setState({ books: result });
  };
  updateBookAuthor = (id, event) => {
    let result = this.state.books.map((book) => {
      if (book.id === id) {
        let copy = { ...book };
        copy.author = event.target.value;
        return copy;
      }
      return book;
    });
    this.setState({ books: result });
  };

  render() {
    let updatingForm = null;
    if (this.state.isUpdating) {
      let updatingBook = this.state.books.find(
        (book) => book.id === this.state.updateBookID
      );
      updatingForm = (
        <NewBook
          title={updatingBook.title}
          author={updatingBook.author}
          stock={updatingBook.stock}
          new_book_title={(event) =>
            this.updateBookTitle(this.state.updateBookID, event)
          }
          new_book_stock={(event) =>
            this.updateBookStock(this.state.updateBookID, event)
          }
          new_book_author={(event) =>
            this.updateBookAuthor(this.state.updateBookID, event)
          }
        />
      );
    }
    let addnewBookData = null;
    if (this.state.isAddingNewBook) {
      addnewBookData = (
        <div>
          <NewBook
            // submitNewBook={this.submitNewBook}
            new_book_title={(event) => this.newBookTitle(event)}
            new_book_stock={(event) => this.newBookStock(event)}
            new_book_author={(event) => this.newBookAuthor(event)}
          />
          <input type="button" value="Submit" onClick={this.submitNewBook} />
        </div>
      );
    }
    let bookDataToShow = null;
    if (this.state.isShowingBooks) {
      bookDataToShow = this.state.books.map((book) => {
        let basic = (
          <Books
            key={book.id}
            title={book.title}
            author={book.author}
            stock={book.stock}
            deleteBook={() => this.deleteBook(book.id)}
            updateBook={() => this.updateBook(book.id)}
          />
        );
        return basic;
      });
    }
    return (
      <div>
        <input type="button" value="Show All Books" onClick={this.showBooks} />
        {bookDataToShow}

        <hr />
        {updatingForm}
        <input type="button" value="Add A Book" onClick={this.addNewBook} />
        {addnewBookData}
      </div>
    );
  }
}

export default App;
