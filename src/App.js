import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Category from "./components/Category";
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/category">
          <Category />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
