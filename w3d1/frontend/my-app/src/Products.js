import React from "react";
import Product from "./Product";
import axios from "axios";

class Products extends React.Component {
  state = { products: [] };

  componentDidMount() {
    axios
      .get("/products", {
        headers: { authorization: "bearer " + localStorage.getItem("token") },
      })
      .then((response) => {
        
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
        <h2>Products</h2>
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
