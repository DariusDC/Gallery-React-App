import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Favorites from "./Favorites";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/favorites">
            <Header optionalBtn="All Photos 🚀" route="/" />
            <Favorites />
          </Route>
          <Route path="/">
            <Header optionalBtn="Favorties ⭐" route="/favorites" />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
