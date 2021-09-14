import axios from "axios";
import React from "react";
// import Reviews from "./reviews";

class Product extends React.Component {
  state = { product: { name: "", price: "", brand: "", model: "" } };

  componentDidMount() {
    // console.log(this.props.match.params.id);
    axios
      .get("/products/" + this.props.match.params.id, {
        headers: { authorization: "bearer " + localStorage.getItem("token") },
      })
      .then((response) => {
        // console.log(response.data);
        let copy = { ...this.state.product };
        copy = response.data;
        this.setState({ product: copy });
      });
  }

  backToProducts = () => {
    this.props.history.push("/products");
  };
  UpdateProduct = () => {
    this.props.history.push("/update-product/" + this.props.match.params.id);
  };
  showReviews = () => {
    this.props.history.push(
      "/product-detail/" + this.props.match.params.id + "/reviews"
    );
  };

  render() {
    return (
      <div>
        <input type="button" value="<" onClick={this.backToProducts} />
        <input type="button" value="Update" onClick={this.UpdateProduct} />
        <p>
          <b>{this.state.product.name}</b>
        </p>
        <p>{this.state.product.price}</p>
        <p>{this.state.product.brand}</p>
        <p>{this.state.product.model}</p>
        <hr />
        <input type="button" value="See Reviews⭐" onClick={this.showReviews} />
        <input
          type="button"
          value="Create A Review ⭐"
          onClick={this.showReviews}
        />

        <hr />
      </div>
    );
  }
}
export default Product;
