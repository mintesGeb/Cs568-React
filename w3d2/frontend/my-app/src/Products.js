import "./App.css";
import React from "react";
import axios from "axios";
import Product from "./Product";
import auth from "./auth";

class Products extends React.Component {
  state = { products: [] };
  componentDidMount() {
    axios.get("/products", auth()).then((response) => {
      console.log(response.data);
      let copy = { ...this.state };
      copy.products = response.data;
      this.setState(copy);
    });
  }
  detailClicked = (id) => {
    this.props.history.push("/product-detail/" + id);
  };
  render() {
    return (
      <div>
        <h2 className="title">Products</h2>
        {this.state.products.map((prod) => {
          return (
            <Product
              key={prod.id}
              name={prod.name}
              price={prod.price}
              detailClicked={() => this.detailClicked(prod.id)}
            />
          );
        })}
      </div>
    );
  }
}

export default Products;
