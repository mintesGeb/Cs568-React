import React from "react";
import { Route, BrowserRouter, Link, Switch } from "react-router-dom";

import Products from "./Products";
import Login from "./login";
import Logout from "./Logout";
import ProductDetail from "./productDetail";
import CreateProduct from "./CreateProduct";
import EditProduct from "./EditProduct";

class App extends React.Component {
  state = {
    isUserLoggedIn: true,
  };
  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.setState({ isUserLoggedIn: true });
    } else {
      this.setState({ isUserLoggedIn: false });
    }
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <ol>
            {/* {this.state.isUserLoggedIn ? (
              <li>
                <Link to="/">Logged Out</Link>
              </li>
            ) : null} */}
            {this.state.isUserLoggedIn ? (
              <li>
                <Link to="/products">All Products</Link>
              </li>
            ) : null}
            {this.state.isUserLoggedIn ? (
              <li>
                <Link to="/create-product">Create Product</Link>
              </li>
            ) : null}
            {this.state.isUserLoggedIn ? null : (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
            {this.state.isUserLoggedIn ? null : (
              <li>
                <Link to="/register">Register</Link>
              </li>
            )}
          </ol>
          <Switch>
            <Route path="/" exact component={Logout} />
            <Route path="/products" exact component={Products} />
            <Route path="/login" exact component={Login} />
            <Route path="/create-product" exact component={CreateProduct} />
            <Route path="/product-detail/:id" exact component={ProductDetail} />
            <Route path="/edit-product/:id" component={EditProduct} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
