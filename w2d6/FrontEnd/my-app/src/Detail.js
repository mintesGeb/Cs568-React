import React from "react";
import axios from "axios";
class movieDetail extends React.Component {
  state = { movie: {} };
  componentDidMount() {
    // console.log(this.props.match.params.id);
    axios.get("/movies/" + this.props.match.params.id).then((response) => {
      let copy = this.state;
      copy.movie = response.data;
      this.setState(copy);
    });
  }
  render() {
    return (
      <div>
        <p>Detail</p>
        <p>{this.state.movie.name}</p>
        <p>{this.state.movie.imdb}</p>
        <p>{this.state.movie.genre}</p>
      </div>
    );
  }
}
export default movieDetail;
