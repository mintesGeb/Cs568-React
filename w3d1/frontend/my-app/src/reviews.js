import React from "react";
import axios from "axios";
import Review from "./review";
import "./App.css";

class Reviews extends React.Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    let url = "/products/" + this.props.match.params.id + "/reviews";
    axios
      .get(url, {
        headers: { authorization: "bearer " + localStorage.getItem("token") },
      })
      .then((response) => {
        let copy = { ...this.state };
        copy.reviews = response.data;
        this.setState(copy);
      });
  }

  editReview = (id) => {
    this.props.history.push("/product-detail/1/reviews/edit/" + id);
  };

  render() {
    return (
      <div>
        {this.state.reviews.map((rev) => {
          return (
            <div>
              {rev.rating == 3 ? (
                <p>⭐⭐⭐</p>
              ) : rev.rating == 2 ? (
                <p>⭐⭐</p>
              ) : (
                <p>⭐</p>
              )}
              <p></p>

              <Review
                key={rev._id}
                title={rev.title}
                description={rev.description}
              />
              <input
                type="button"
                value="Edit Review"
                onClick={() => this.editReview(rev._id)}
              />
              <hr />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Reviews;
