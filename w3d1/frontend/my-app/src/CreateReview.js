import React from "react";
import axios from "axios";
import "./App.css";

class CreateReview extends React.Component {
  state = { review: { id: "", title: "", description: "", rating: "" } };

  addReviewInput = (event) => {
    let copy = { ...this.state.review };
    copy[event.target.name] = event.target.value;
    copy.id = this.props.match.params.id;
    this.setState({ review: copy });
  };

  addReviewSubmitted = () => {
    console.log(this.state.review);
    axios
      .post("/products/add-review", this.state.review, {
        headers: { authorization: "bearer " + localStorage.getItem("token") },
      })
      .then((response) => {
        console.log(response.data);
      });
  };

  render() {
    return (
      <div className="new-review">
        <div>
          <input
            type="radio"
            id="3"
            name="rating"
            value="3"
            onChange={(event) => this.addReviewInput(event)}
          />
          <label for="3">⭐⭐⭐</label>
          <input
            type="radio"
            id="2"
            name="rating"
            value="2"
            onChange={(event) => this.addReviewInput(event)}
          />
          <label for="2">⭐⭐</label>
          <input
            type="radio"
            id="1"
            name="rating"
            value="1"
            onChange={(event) => this.addReviewInput(event)}
          />
          <label for="1">⭐</label>
        </div>

        <input
          type="text"
          name="title"
          placeholder="title"
          onChange={(event) => this.addReviewInput(event)}
        />
        <input
          type="text"
          name="description"
          placeholder="description"
          onChange={(event) => this.addReviewInput(event)}
        />
        <input type="button" value="Submit" onClick={this.addReviewSubmitted} />
      </div>
    );
  }
}

export default CreateReview;
