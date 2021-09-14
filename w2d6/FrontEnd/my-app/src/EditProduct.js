import axios from "axios";
import React from "react";

class EditProduct extends React.Component {
  state = {
    product: {
      name: "",
      price: "",
      brand: "",
      modelName: "",
    },
  };
  componentDidMount() {
    axios
      .get("/products/" + this.props.match.params.id + "/details")
      .then((response) => {
        let copy = { ...this.state.product };
        copy = response.data;
        this.setState({ product: copy });
      });
  }
  newProductInfo = (event) => {
    let copy = { ...this.state.product };
    copy[event.target.name] = event.target.value;
    this.setState({ product: copy });
  };
  submitUpdatedProduct = () => {
    console.log(this.state.product);

    let url = "/products/" + this.props.match.params.id;

    axios
      .put(url, this.state.product, {
        headers: { authorization: "bearer " + localStorage.getItem("token") },
      })
      .then((response) => {
        console.log(response.data);
      });
  };
  render() {
    return (
      <div>
        <p>Name: </p>
        <input
          type="text"
          name="name"
          value={this.state.product.name}
          onChange={(event) => this.newProductInfo(event)}
        />
        <p>Price: </p>
        <input
          type="text"
          name="price"
          value={this.state.product.price}
          onChange={(event) => this.newProductInfo(event)}
        />
        <p>Brand: </p>
        <input
          type="text"
          name="brand"
          value={this.state.product.brand}
          onChange={(event) => this.newProductInfo(event)}
        />
        <p>modelName: </p>
        <input
          type="text"
          name="modelName"
          value={this.state.product.modelName}
          onChange={(event) => this.newProductInfo(event)}
        />
        <br />
        <input
          type="button"
          value="Update"
          onClick={this.submitUpdatedProduct}
        />
      </div>
    );
  }
}

export default EditProduct;
