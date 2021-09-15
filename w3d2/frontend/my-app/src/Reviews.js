import "./App.css";
import React from "react";
import axios from "axios";
import Review from "./Review";
import auth from "./auth";

class Reviews extends React.Component {
  state = {
    reviews: [],
  };
  componentDidMount() {
    axios
      .get("/products/" + this.props.match.params.id + "/reviews", auth())
      .then((res) => {
        console.log(res.data);
        let copy = { ...this.state };
        copy.reviews = res.data;
        this.setState(copy);
      });
  }
  render() {
    return (
      <div>
        {this.state.reviews.map((rev) => {
          return (
            <div className="review">
              {rev.rating == 3 ? (
                <p>⭐⭐⭐</p>
              ) : rev.rating == 2 ? (
                <p>⭐⭐</p>
              ) : (
                <p>⭐</p>
              )}
              <Review
                key={rev._id}
                title={rev.title}
                description={rev.description}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Reviews;
