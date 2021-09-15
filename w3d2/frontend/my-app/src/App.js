import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import React from "react";

import Home from "./Home";
import Login from "./Login";
import Logout from "./Logout";
import Products from "./Products";
import ProductDetail from "./ProductDetail";
import Reviews from "./Reviews";

class App extends React.Component {
  state = { isLoggedIn: true };
  render() {
    return (
      <BrowserRouter className="App">
        <div>
          <ul>
            <li>
              <Link to="/login" className="btn btn-dark">
                Login
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>

            <li>
              <Link to="/create-product">create-product</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </ul>
        </div>

        <Route path="/home" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/products" component={Products} />
        <Route path="/product-detail/:id" component={ProductDetail} />
        <Route path="/product-detail/:id/reviews" component={Reviews} />
      </BrowserRouter>
    );
  }
}

export default App;
