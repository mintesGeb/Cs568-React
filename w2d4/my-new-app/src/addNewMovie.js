function AddMovie(props) {
  return (
    <div>
      <input
        type="text"
        value={props.name}
        onChange={props.propChanged}
        name="name"
      />
      <input
        type="text"
        value={props.imdb}
        onChange={props.propChanged}
        name="imdb"
      />
      <input
        type="text"
        value={props.genre}
        onChange={props.propChanged}
        name="genre"
      />
      <input type="button" value="Add Movie" onClick={props.UpdateMovie} />
    </div>
  );
}
export default AddMovie;
