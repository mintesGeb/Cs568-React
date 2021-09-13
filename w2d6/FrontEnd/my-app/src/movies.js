import React from "react";
import axios from "axios";
import Movie from "./movie";

class Movies extends React.Component {
  state = { movies: [] };
  componentDidMount() {
    axios.get("/movies").then((response) => {
      let copy = { ...this.state };
      copy.movies = response.data;
      this.setState(copy);
    });
  }

  showDetail = (id) => {
    // console.log(this.props);
    this.props.history.push("/movie-detail/" + id);
  };
  render() {
    return (
      <div>
        {this.state.movies.map((mov) => {
          return (
            <Movie
              key={mov._id}
              title={mov.name}
              showDetail={() => this.showDetail(mov._id)}
            />
          );
        })}
      </div>
    );
  }
}

export default Movies;
