import logo from "./logo.svg";
import "./App.css";
import Movies from "./movies";
import React from "react";
import axios from "axios";
import AddMovie from "./addNewMovie";

class App extends React.Component {
  state = {
    movies: [],
    movie: { name: "", imdb: "", genre: "" },
    isUpdating: { status: false, id: "" },
    movieToUpdate: { name: "", genre: "", imdb: "" },
    x: 0,
  };
  componentDidMount() {
    // console.log("app : comp did mount");
    axios.get("/movies").then((response) => {
      // console.log(response.data);
      this.setState({ movies: response.data });
    });
  }
  componentDidUpdate() {}

  updateMovies = (id) => {
    console.log(id);
    let updatedMovie = this.state.movies.find((movie) => movie._id === id);
    console.log(updatedMovie);
    this.setState({
      isUpdating: {
        status: !this.state.isUpdating.status,
        id: id,
      },
      movieToUpdate: updatedMovie,
    });
  };
  propChanged = (event) => {
    let copy = { ...this.state.movie };
    // console.log(copy);
    copy[event.target.name] = event.target.value;
    this.setState({ movie: copy });
  };
  addMovie = () => {
    // console.log(this.state.movie);

    axios.post("/movies", this.state.movie).then((response) => {
      console.log(response);
    });
  };
  updateName = (event) => {
    this.setState({
      movieToUpdate: {
        name: event.target.value,
        genre: this.state.movieToUpdate.genre,
        imdb: this.state.movieToUpdate.imdb,
      },
    });
  };
  updateIMDB = (event) => {
    this.setState({
      movieToUpdate: {
        name: this.state.movieToUpdate.name,
        genre: this.state.movieToUpdate.genre,
        imdb: event.target.value,
      },
    });
  };
  updateGenre = (event) => {
    this.setState({
      movieToUpdate: {
        name: this.state.movieToUpdate.name,
        genre: event.target.value,
        imdb: this.state.movieToUpdate.imdb,
      },
    });
  };
  submittedUpdate = () => {
    console.log(this.state.movieToUpdate, this.state.isUpdating.id);
    axios.put(`/movies/${this.state.isUpdating.id}`, this.state.movieToUpdate);
  };
  render() {
    let updateForm = null;
    if (this.state.isUpdating.status) {
      updateForm = (
        <div>
          <input
            type="text"
            value={this.state.movieToUpdate.name}
            onChange={(event) => this.updateName(event)}
          />
          <input
            type="text"
            value={this.state.movieToUpdate.imdb}
            onChange={(event) => this.updateIMDB(event)}
          />
          <input
            type="text"
            value={this.state.movieToUpdate.genre}
            onChange={(event) => this.updateGenre(event)}
          />
          <input type="button" value="Submit" onClick={this.submittedUpdate} />
        </div>
      );
    }
    return (
      <div>
        {updateForm}
        {this.state.movies.map((movie) => {
          return (
            <div>
              <Movies
                key={movie._id}
                name={movie.name}
                imdb={movie.imdb}
                genre={movie.genre}
                updateMovies={() => this.updateMovies(movie._id)}
              />
            </div>
          );
        })}
        <AddMovie
          name={this.state.movie.name}
          genre={this.state.movie.genre}
          propChanged={(event) => this.propChanged(event)}
          UpdateMovie={this.addMovie}
        />
      </div>
    );
  }
}

export default App;
