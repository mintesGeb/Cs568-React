import React from "react";
import axios from "axios";
import "./App.css";

class ProductDetail extends React.Component {
  state = { product: {} };
  componentDidMount() {
    axios
      .get("/products/" + this.props.match.params.id, {
        headers: { authorization: "bearer " + "jwt_token" },
      })
      .then((response) => {
        console.log(response.data);
        let copy = { ...this.state.product };
        copy = response.data;
        this.setState({ product: copy });
      });
  }

  backToProducts = () => {
    this.props.history.push("/products");
  };
  showReviews = () => {
    this.props.history.push(
      "/product-detail/" + this.props.match.params.id + "/reviews"
    );
  };
  render() {
    return (
      <div className="general-margin">
        <h2 className="title">Product Detail</h2>
        <input
          className="btn btn-dark"
          type="button"
          value="<"
          onClick={this.backToProducts}
        />
        {/* <input type="button" value="update" onClick={this.updateClicked} /> */}
        <p>
          <i>Name:</i> <b>{this.state.product.name}</b>
        </p>
        <p>
          <i>Price:</i> $<b>{this.state.product.price}</b>
        </p>
        <p>
          <i>Brand:</i> <b>{this.state.product.brand}</b>
        </p>
        <p>
          <i>Model:</i> <b>{this.state.product.model}</b>
        </p>
        <p>
          <i>Reputation:</i> <b>{this.state.product.reputation}</b>
        </p>
        <input type="button" value="Reviews" onClick={this.showReviews} />
      </div>
    );
  }
}
export default ProductDetail;
