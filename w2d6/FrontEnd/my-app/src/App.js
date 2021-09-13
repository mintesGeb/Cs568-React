import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from "./home";
import Movies from "./movies";
import MovieDetail from "./Detail";
import CreateMovie from "./CreateMovie";

function App() {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/movies"> Movies</Link>
          </li>
          <li>
            <Link to="/create-movie"> Create Movie</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movies" component={Movies} />
          <Route path="/movie-detail/:id" component={MovieDetail} />
          <Route path="/create-movie" component={CreateMovie} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
