import React from "react";

class Movie extends React.Component {
  render() {
    return (
      <div>
        <h3> {this.props.title}</h3>
        <input
          type="text"
          onChange={this.props.editTitle}
          value={this.props.title}
        />
        <p> {this.props.rating}</p>
        <p> {this.props.genre}</p>
        <p>{this.props.director}</p>
        <p>{this.props.year}</p>
        <p>{this.props.description}</p>
        <input type="button" onClick={this.props.showDetail} value="Detail" />
        <input type="button" onClick={this.props.deleteMovie} value="Delete" />
        <input
          type="button"
          onClick={this.props.addToFav}
          value="Add To Fav"
          disabled={this.props.disabledStateATF}
        />
        <input
          type="button"
          onClick={this.props.removeFromFav}
          value="Remove From Fav"
          disabled={this.props.disabledStateRFF}
        />
        <div>=============================</div>
      </div>
    );
  }
}

export default Movie;
