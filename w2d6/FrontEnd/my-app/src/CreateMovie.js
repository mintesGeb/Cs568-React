import axios from "axios";
import React from "react";

class CreateMovie extends React.Component {
  state = { movie: { name: "", imdb: "", genre: "" } };
  componentDidMount() {}

  changeInput = (event) => {
    let copy = { ...this.state.movie };
    copy[event.target.name] = event.target.value;
    this.setState({ movie: copy });
  };
  newMovieClicked = () => {
    console.log(this.state.movie);
    axios.post("/movies", this.state.movie);
  };
  render() {
    return (
      <div>
        <p>Title: </p>
        <input
          type="text"
          name="name"
          onChange={(event) => this.changeInput(event)}
        />
        <p>IMDB: </p>
        <input
          type="text"
          name="imdb"
          onChange={(event) => this.changeInput(event)}
        />
        <p>Genre: </p>
        <input
          type="text"
          name="genre"
          onChange={(event) => this.changeInput(event)}
        />
        <input type="button" value="Submit" onClick={this.newMovieClicked} />
      </div>
    );
  }
}

export default CreateMovie;
