import "./App.css";

function Review(props) {
  return (
    <div className="review">
      <h4>{props.title}</h4>
      <p>{props.description}</p>
    </div>
  );
}
export default Review;
