import React from "react";
import Product from "./Product";

class App extends React.Component {
  state = {
    products: [
      { id: 1, name: "banana", price: 2 },
      { id: 2, name: "apple", price: 3 },
      { id: 3, name: "orange", price: 2.5 },
    ],
    shoppingCart: [
      { id: 1, name: "banana", price: 2, quantity: 1 },
      { id: 3, name: "orange", price: 2.5, quantity: 3 },
    ],
    newProduct: { name: "", price: 0 },
    numberOfProducts: 2,
  };
  addToCart = (id) => {
    let check = this.state.shoppingCart.filter((prod) => prod.id === id);
    if (check.length) {
      let result = this.state.shoppingCart.map((prod) => {
        if (prod.id === id) {
          let copy = { ...prod };
          copy.quantity = copy.quantity + 1;
          return copy;
        }
        return prod;
      });
      this.setState({ shoppingCart: result });
    } else {
      let myProd = this.state.products.find((prod) => prod.id === id);
      myProd.quantity = 1;
      this.setState({ shoppingCart: this.state.shoppingCart.concat(myProd) });
    }
  };
  removeFromCart = (id) => {
    let toRemove = this.state.shoppingCart.find((prod) => prod.id === id);

    if (toRemove.quantity > 1) {
      let result = this.state.shoppingCart.map((prod) => {
        if (prod.id === id) {
          let copy = { ...prod };
          copy.quantity = copy.quantity - 1;
          return copy;
        }
        return prod;
      });
      this.setState({ shoppingCart: result });
    } else {
      let result = this.state.shoppingCart.filter((prod) => prod.id !== id);
      this.setState({ shoppingCart: result });
    }
  };
  newProductName = (event) => {
    this.setState({
      newProduct: {
        name: event.target.value,
        price: this.state.newProduct.price,
      },
    });
  };
  newProductPrice = (event) => {
    this.setState({
      newProduct: {
        name: this.state.newProduct.name,
        price: event.target.value,
      },
    });
  };
  newProductSubmitted = () => {
    let check = this.state.products.filter(
      (prod) => prod.name === this.state.newProduct.name
    );
    if (check.length) {
      console.log("product name already exists");
    } else {
      let newProduct = { ...this.state.newProduct };
      newProduct.id = this.state.numberOfProducts + 1;
      this.setState({
        products: this.state.products.concat(newProduct),
        numberOfProducts: this.state.numberOfProducts + 1,
      });
    }
  };

  render() {
    let newProductName = (
      <input type="text" onChange={(event) => this.newProductName(event)} />
    );
    let newProductPrice = (
      <input type="text" onChange={(event) => this.newProductPrice(event)} />
    );
    return (
      <div>
        <h3>Products</h3>
        {this.state.products.map((prod) => {
          return (
            <div>
              <Product key={prod.id} name={prod.name} price={prod.price} />
              <input
                type="button"
                value="Add to Cart"
                onClick={() => this.addToCart(prod.id)}
              />
              <div>===============</div>
            </div>
          );
        })}
        <h3>Shopping Cart</h3>
        {this.state.shoppingCart.map((prod) => {
          return (
            <div>
              <Product key={prod.id} name={prod.name} price={prod.price} />
              <p>quantity: {prod.quantity}</p>
              <input
                type="button"
                value="Delete"
                onClick={() => this.removeFromCart(prod.id)}
              />
            </div>
          );
        })}
        <h3>Add New Product</h3>
        <Product name={newProductName} price={newProductPrice} />
        <input
          type="button"
          value="Submit"
          onClick={this.newProductSubmitted}
        />
      </div>
    );
  }
}

export default App;
