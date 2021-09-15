import React from "react";
import axios from "axios";

class NewProduct extends React.Component {
  state = { product: { name: "", price: "", brand: "", model: "" } };

  newProductInfo = (event) => {
    let copy = { ...this.state.product };
    copy[event.target.name] = event.target.value;
    copy.reputation = 10;
    this.setState({ product: copy });
  };
  newProductSubmitted = () => {
    console.log(this.state.product);
    axios
      .post("/products", this.state.product, {
        headers: { authorization: "bearer " + localStorage.getItem("token") },
      })
      .then((response) => {
        console.log(response.data);
      });
  };

  render() {
    return (
      <div>
        <h3>New Product</h3>
        <input
          type="text"
          value={this.state.product.name}
          name="name"
          onChange={(event) => this.newProductInfo(event)}
          placeholder="name"
        />
        <input
          type="text"
          value={this.state.product.price}
          name="price"
          onChange={(event) => this.newProductInfo(event)}
          placeholder="price"
        />
        <input
          type="text"
          value={this.state.product.brand}
          name="brand"
          onChange={(event) => this.newProductInfo(event)}
          placeholder="brand"
        />
        <input
          type="text"
          value={this.state.product.model}
          name="model"
          onChange={(event) => this.newProductInfo(event)}
          placeholder="model"
        />
        <input
          type="button"
          value="Submit"
          onClick={this.newProductSubmitted}
        />
      </div>
    );
  }
}

export default NewProduct;
