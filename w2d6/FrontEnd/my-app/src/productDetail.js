import React from "react";
import axios from "axios";

class ProdctDetail extends React.Component {
  state = {
    product: {
      name: "",
      price: 0,
      brand: "",
      modelName: "",
    },
  };

  componentDidMount() {
    let url = "/products/" + this.props.match.params.id + "/details";
    axios
      .get(url, {
        headers: { authorization: "bearer " + localStorage.getItem("token") },
      })
      .then((response) => {
        let copy = { ...this.state };
        copy.product = response.data;
        this.setState(copy);
      });
  }
  backToAllProducts = () => {
    if (localStorage.getItem("token")) {
      this.props.history.push("/products");
    }
  };
  logoutClicked = () => {
    localStorage.removeItem("token");
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <input type="button" value="logout" onClick={this.logoutClicked} />
        <br />
        <input type="button" value="<" onClick={this.backToAllProducts} />
        <h3>Product Detail</h3>
        <p>{this.state.product.name}</p>
        <p>{this.state.product.price}</p>
        <p>{this.state.product.brand}</p>
        <p>{this.state.product.modelName}</p>
      </div>
    );
  }
}

export default ProdctDetail;
