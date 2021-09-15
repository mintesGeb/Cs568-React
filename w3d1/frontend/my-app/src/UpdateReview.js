import React from "react";
import axios from "axios";
import "./App.css";

class UpdateReview extends React.Component {
  state = {
    review: {
      _id: "",
      id: "",
      title: "",
      description: " ",
      rating: "",
    },
  };
  componentDidMount() {
    let url =
      "/products/" +
      this.props.match.params.id +
      "/reviews/" +
      this.props.match.params.rid;

    axios
      .get(url, {
        headers: { authorization: "bearer " + localStorage.getItem("token") },
      })
      .then((response) => {
        let copy = { ...this.state.review };
        copy = response.data;
        this.setState({ review: copy });
      });
  }

  updateReviewInput = (event) => {
    let copy = { ...this.state.review };
    copy[event.target.name] = event.target.value;
    this.setState({ review: copy });
  };

  updateReviewSubmitted = () => {
    let url =
      "/products/" +
      this.props.match.params.id +
      "/reviews/" +
      this.props.match.params.rid;

    axios
      .put(url, this.state.review, {
        headers: { authorization: "bearer " + localStorage.getItem("token") },
      })
      .then((response) => {
        console.log(response.data);
      });
  };
  

  render() {
    return (
      <div className="update-review">
        <h4> Edit Review</h4>
        <div>
          <input
            type="radio"
            id="3"
            name="rating"
            value="3"
            onChange={(event) => this.updateReviewInput(event)}
          />
          <label for="3">⭐⭐⭐</label>
          <input
            type="radio"
            id="2"
            name="rating"
            value="2"
            onChange={(event) => this.updateReviewInput(event)}
          />
          <label for="2">⭐⭐</label>
          <input
            type="radio"
            id="1"
            name="rating"
            value="1"
            onChange={(event) => this.updateReviewInput(event)}
          />
          <label for="1">⭐</label>
        </div>

        <input
          type="text"
          name="title"
          value={this.state.review.title}
          onChange={(event) => this.updateReviewInput(event)}
        />
        
        <input
          type="text"
          name="description"
          value={this.state.review.description}
          onChange={(event) => this.updateReviewInput(event)}
        />
        <input
          type="button"
          value="Submit"
          onClick={this.updateReviewSubmitted}
        />
      </div>
    );
  }
}

export default UpdateReview;
