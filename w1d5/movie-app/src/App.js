import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Movie from "./Movie";
import NewMovie from "./NewMovie";

class App extends React.Component {
  state = {
    movies: [
      {
        id: 1,
        title: "movie 1",
        rating: 4,
        genre: "comedy",
        director: "mintes",
        year: 1991,
        description: "very funny",
        isDetailVisible: false,
        isFavorite: false,
      },
      {
        id: 2,
        title: "movie 2",
        rating: 3,
        genre: "horror",
        director: "jossy",
        year: 1995,
        description: "very scary",
        isDetailVisible: false,
        isFavorite: false,
      },
      {
        id: 3,
        title: "movie 3",
        rating: 5,
        genre: "trajedy",
        director: "robbie",
        year: 1996,
        description: "very emotional",
        isDetailVisible: false,
        isFavorite: false,
      },
    ],
    favoriteMovie: [],
    newMovie: {
      title: "",
      rating: 5,
      Genre: "",
    },
    noOfMovies: 3,
  };
  deleteMovie = (id) => {
    let result = this.state.movies.filter((movie) => movie.id !== id);
    this.setState({ movies: result });
  };
  showDetail = (id) => {
    let result = this.state.movies.map((movie) => {
      if (movie.id === id) {
        let copy = { ...movie };
        copy.isDetailVisible = !copy.isDetailVisible;

        return copy;
      }
      return movie;
    });
    this.setState({ movies: result });
  };
  addToFav = (id) => {
    let result = this.state.movies.map((movie) => {
      if (movie.id === id) {
        let copy = { ...movie };
        copy.isFavorite = true;
        console.log(copy.isFavorite);

        return copy;
      }
      return movie;
    });
    this.setState({ movies: result });

    let favMovie = this.state.movies.find((movie) => movie.id === id);
    let found = this.state.favoriteMovie.filter((favMov) => favMov.id === id);
    if (found.length === 0) {
      this.state.favoriteMovie.push(favMovie);
      console.log(this.state.favoriteMovie);
    } else {
      console.log("already a favorite");
    }
  };

  removeFromFav = (id) => {
    console.log("removed");
    let result = this.state.movies.map((movie) => {
      if (movie.id === id) {
        let copy = { ...movie };
        copy.isFavorite = !copy.isFavorite;
        return copy;
      }
      return movie;
    });
    this.setState({ movies: result });

    let filtered = this.state.favoriteMovie.filter((movie) => movie.id !== id);
    this.setState({ favoriteMovie: filtered });
  };

  editTitle = (id, event) => {
    let result = this.state.movies.map((movie) => {
      if (movie.id === id) {
        let copy = { ...movie };
        copy.title = event.target.value;
        console.log(copy.title);
        return copy;
      }
      return movie;
    });
    this.setState({ movies: result });
  };
  newMovieTitle = (event) => {
    this.setState({
      newMovie: {
        title: event.target.value,
        rating: this.state.newMovie.rating,
        genre: this.state.newMovie.genre,
      },
    });
  };
  newMovieRating = (event) => {
    this.setState({
      newMovie: {
        title: this.state.newMovie.title,
        rating: event.target.value,
        genre: this.state.newMovie.genre,
      },
    });
  };
  newMovieGenre = (event) => {
    this.setState({
      newMovie: {
        title: this.state.newMovie.title,
        rating: this.state.newMovie.rating,
        genre: event.target.value,
      },
    });
  };
  addMovie = () => {
    console.log(this.state.newMovie);
    let newMovie = this.state.newMovie;
    newMovie.id = this.state.noOfMovies + 1;
    this.state.movies.push(newMovie);
    this.setState({
      newMovie: { title: "", rating: 5, genre: "" },
      noOfMovies: this.state.noOfMovies + 1,
    });
  };

  render() {
    let movieDisplay = this.state.movies.map((movie) => {
      let basic = (
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          rating={movie.rating}
          genre={movie.genre}
          deleteMovie={() => {
            this.deleteMovie(movie.id);
          }}
          showDetail={() => {
            this.showDetail(movie.id);
          }}
          favorite={() => this.addToFavorites(movie.id)}
          addToFav={() => this.addToFav(movie.id)}
          removeFromFav={() => this.removeFromFav(movie.id)}
          disabledStateATF={movie.isFavorite}
          disabledStateRFF={!movie.isFavorite}
          editTitle={(event) => {
            this.editTitle(movie.id, event);
          }}
        ></Movie>
      );
      let detailed = (
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          rating={movie.rating}
          genre={movie.genre}
          director={movie.director}
          year={movie.year}
          description={movie.description}
          deleteMovie={() => {
            this.deleteMovie(movie.id);
          }}
          showDetail={() => {
            this.showDetail(movie.id);
          }}
          addToFav={() => this.addToFav(movie.id)}
          removeFromFav={() => this.removeFromFav(movie.id)}
          disabledStateATF={movie.isFavorite}
          disabledState={!movie.isFavorite}
          editTitle={(event) => {
            this.editTitle(movie.id, event);
          }}
        ></Movie>
      );

      if (movie.isDetailVisible) {
        return detailed;
      }
      return basic;
    });

    return (
      <div>
        <h3>Movies</h3>
        {movieDisplay}
        <hr />
        <h3>New Movie</h3>
        <NewMovie
          newMovieTitle={(event) => this.newMovieTitle(event)}
          newMovieRating={(event) => this.newMovieRating(event)}
          newMovieGenre={(event) => this.newMovieGenre(event)}
          addMovie={this.addMovie}
        />
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
