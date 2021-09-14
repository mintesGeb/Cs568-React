import axios from "axios";
import React from "react";

class CreateProduct extends React.Component {
  state = {
    product: {
      name: "",
      price: "",
      brand: "",
      modelName: "",
    },
  };

  newProductInfo = (event) => {
    let copy = { ...this.state.product };
    copy[event.target.name] = event.target.value;
    this.setState({ product: copy });
  };

  submitNewProduct = () => {
    // console.log(this.state.product);
    axios
      .post("/products/create-product", this.state.product, {
        headers: { authorization: "bearer jwt_token" },
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
          onChange={(event) => this.newProductInfo(event)}
        />
        <p>Price: </p>
        <input
          type="text"
          name="price"
          onChange={(event) => this.newProductInfo(event)}
        />
        <p>Brand: </p>
        <input
          type="text"
          name="brand"
          onChange={(event) => this.newProductInfo(event)}
        />
        <p>modelName: </p>
        <input
          type="text"
          name="modelName"
          onChange={(event) => this.newProductInfo(event)}
        />
        <br />
        <input type="button" value="Submit" onClick={this.submitNewProduct} />
      </div>
    );
  }
}

export default CreateProduct;
