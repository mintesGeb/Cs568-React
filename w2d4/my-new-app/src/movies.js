import React from "react";

class Movies extends React.PureComponent {
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextProps.movies !== this.props.movies) {
  //     return true;
  //   }
  //   return false;
  // }
  render() {
    console.log("comp: render");
    return (
      <div>
        <p>{this.props.name}</p>
        <p>{this.props.imdb}</p>
        <p>{this.props.genre}</p>
        <input type="button" value="update" onClick={this.props.updateMovies} />
      </div>
    );
  }
}

export default Movies;
