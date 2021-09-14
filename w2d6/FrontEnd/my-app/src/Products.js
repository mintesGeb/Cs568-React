import React from "react";
import axios from "axios";
import Product from "./product";

class Products extends React.Component {
  state = {
    products: [],
  };
  componentDidMount() {
    let copy = { ...this.state };
    console.log(localStorage.getItem("token"));
    axios
      .get("/products", {
        headers: { authorization: "bearer " + localStorage.getItem("token") },
      })
      .then((response) => {
        copy.products = response.data;
        this.setState(copy);
      });
  }
  showDetailClicked = (id) => {
    this.props.history.push("/product-detail/" + id);
  };
  createProduct = () => {
    this.props.history.push("/create-product");
  };
  logout = () => {
    localStorage.removeItem("token");
    this.props.history.push("/logout");
  };
  editProduct = (id) => {
    this.props.history.push("/edit-product/"+id)
  };
  render() {
    return (
      <div>
        <input type="button" value="Logout" onClick={this.logout} />
        <h3>Products</h3>
        {this.state.products.map((prod) => {
          return (
            <div>
              <Product
                key={prod.id}
                name={prod.name}
                price={prod.price}
                showDetailClicked={() => this.showDetailClicked(prod.id)}
                editProduct={() => this.editProduct(prod.id)}
              />
              <hr />
            </div>
          );
        })}
        <h3>Add new Product</h3>
        <input
          type="button"
          value="Add New Product"
          onClick={this.createProduct}
        />
      </div>
    );
  }
}
export default Products;
 