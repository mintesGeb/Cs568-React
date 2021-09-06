function Favorite(props) {
  return (
    <div>
      <p>{props.title}</p>
      <p>{props.rating}</p>
      <p>{props.genre}</p>
      <input
        type="button"
        value="Remove from Favorites"
        onClick={props.remFroFav}
      />
    </div>
  );
}
export default Favorite;
