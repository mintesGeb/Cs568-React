function NewMovie(props) {
  return (
    <div>
      <div>
        <p> Title </p>
        <input type="text" onChange={props.newMovieTitle} />
        <p> Rating </p>
        <input type="number" onChange={props.newMovieRating} />
        <p> Genre </p>
        <input type="text" onChange={props.newMovieGenre} />
      </div>
      <input
        // className="addMovieBtn"
        type="button"
        value="Submit"
        onClick={props.addMovie}
      />
    </div>
  );
}
export default NewMovie;
