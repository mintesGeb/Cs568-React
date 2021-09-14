import React from "react";
import axios from "axios";

class UpdateProduct extends React.Component {
  state = { product: { name: "", price: "", brand: "", model: "" } };

  auth = {
    headers: { authorization: "bearer " + localStorage.getItem("token") },
  };
  componentDidMount() {
    axios
      .get("/products/" + this.props.match.params.id, this.auth)
      .then((response) => {
        let copy = { ...this.state.product };
        copy = response.data;
        this.setState({ product: copy });
      });
  }
  componentDidUpdate() {
    console.log("Hi");
  }
  updateProductInfo = (event) => {
    let copy = { ...this.state.product };
    copy[event.target.name] = event.target.value;
    this.setState({ product: copy });
  };

  productUpdateSubmitted = () => {
    let url = "/products/" + this.props.match.params.id;
    console.log(this.state.product);

    axios.put(url, this.state.product, this.auth).then((response) => {
      console.log(response.data);
    });
  };

  backToProducts = () => {
    this.props.history.push("/product-detail/" + this.props.match.params.id);
  };

  render() {
    return (
      <div>
        <input type="button" value="<" onClick={this.backToProducts} />
        <h3>Update Product</h3>
        <input
          type="text"
          value={this.state.product.name}
          name="name"
          onChange={(event) => this.updateProductInfo(event)}
        />
        <input
          type="text"
          value={this.state.product.price}
          name="price"
          onChange={(event) => this.updateProductInfo(event)}
        />
        <input
          type="text"
          value={this.state.product.brand}
          name="brand"
          onChange={(event) => this.updateProductInfo(event)}
        />
        <input
          type="text"
          value={this.state.product.model}
          name="model"
          onChange={(event) => this.updateProductInfo(event)}
        />
        <input
          type="button"
          value="Submit"
          onClick={this.productUpdateSubmitted}
        />
      </div>
    );
  }
}

export default UpdateProduct;
