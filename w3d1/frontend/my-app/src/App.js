import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

import Home from "./Home";
import Products from "./Products";
import React from "react";
import Login from "./Login";
import Logout from "./Logout";
import LogoutPage from "./LogoutPage";
import ProductDetail from "./ProductDetailed";
import NewProduct from "./NewProduct";
import UpdateProduct from "./UpdateProduct";
import Reviews from "./reviews";
import CreateReview from "./CreateReview";
import UpdateReview from "./UpdateReview";
class App extends React.Component {
  state = {
    isLoggedIn: false,
  };
  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.setState({ isLoggedIn: true });
    } else {
      this.setState({ isLoggedIn: false });
    }
  }
  // componentDidUpdate() {
  //   if (localStorage.getItem("token")) {
  //     this.setState({ isLoggedIn: true });
  //   } else {
  //     this.setState({ isLoggedIn: false });
  //   }
  // }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div>
            <Link to="/">Home</Link>
          </div>

          {this.state.isLoggedIn ? null : (
            <ul>
              <li>
                <Link to="/login">Login</Link>
              </li>

              <li>
                <Link to="/register">Register</Link>
              </li>
            </ul>
          )}
          {this.state.isLoggedIn ? (
            <div>
              {/* <Logout /> */}
              <h3>Hi {localStorage.getItem("username")}</h3>
              <ul>
                <li>
                  <Link to="/logout">
                    <Logout />
                  </Link>
                </li>
                <li>
                  <Link to="/products">Show Products</Link>
                </li>
                <li>
                  <Link to="/create-product">Create Product</Link>
                </li>
              </ul>
            </div>
          ) : null}
        </div>
        {/* <Switch> */}
        <Route path="/" exact component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={LogoutPage} />
        <Route path="/update-product/:id" component={UpdateProduct} />
        <Route path="/create-product" component={NewProduct} />
        <Route path="/product-detail/:id" component={ProductDetail} />
        <Route path="/product-detail/:id/reviews" component={Reviews} />
        <Route
          path="/product-detail/:id/reviews/create"
          exact
          component={CreateReview}
        />
        <Route
          path="/product-detail/:id/reviews/edit/:rid"
          component={UpdateReview}
        />
        {/* </Switch> */}
      </BrowserRouter>
    );
  }
}

export default App;
