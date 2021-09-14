import React from "react";
import axios from "axios";
import Review from "./review";

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
        console.log(response.data);
        let copy = { ...this.state };
        copy.reviews = response.data;
        this.setState(copy);
      });
  }

  render() {
    return (
      <div>
        {this.state.reviews.map((rev) => {
          return (
            <Review
              key={rev._id}
              title={rev.title}
              description={rev.description}
            />
          );
        })}
      </div>
    );
  }
}

export default Reviews;
