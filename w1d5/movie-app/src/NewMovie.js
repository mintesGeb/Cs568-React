function NewMovie(props) {
  return (
    <div>
      <div>
        <span> Title </span>
        <input type="text" onChange={props.newMovieTitle} />
        <span> Rating </span>
        <input type="number" onChange={props.newMovieRating} />
        <span> Genre </span>
        <input type="text" onChange={props.newMovieGenre} />
      </div>
      <input
        className="addMovieBtn"
        type="button"
        value="Add Movie"
        onClick={props.addMovie}
      />
    </div>
  );
}
export default NewMovie;
