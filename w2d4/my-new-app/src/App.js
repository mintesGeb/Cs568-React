import logo from "./logo.svg";
import "./App.css";
import Movies from "./movies";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("app: constructor");
  }
  state = {
    movies: [{ id: 1, name: "Ace Ventura", imdb: 3216546, genre: "comedy" }],
    isUpdating: true,
  };
  componentDidMount() {
    console.log("app : comp did mount");
  }
  componentDidUpdate() {
    console.log("app: comp did update");
  }

  updateMovies = () => {
    this.setState({
      isUpdating: !this.state.isUpdating,
    });
  };
  render() {
    console.log("app: render");
    return (
      <div>
        {this.state.movies.map((movie) => {
          return (
            <div>
              <Movies
                key={movie.id}
                name={movie.name}
                imdb={movie.imdb}
                genre={movie.genre}
                updateMovies={this.updateMovies}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
