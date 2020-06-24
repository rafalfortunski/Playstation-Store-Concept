import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Games from "./Games";
import Home from "./Home";
import GameDetails from "./GameDetails";
import ShoppingCart from "./ShoppingCart";
import NotReady from "./NotReady";

const Root = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/games" component={Games} />
        <Route path="/games/:id" component={GameDetails} />
        <Route path="/cart" component={ShoppingCart} />
        <Route path="/checkout" component={NotReady} />
        <Route path="/playstation" component={NotReady} />
        <Route path="/deals" component={NotReady} />
        <Route path="/add-ons" component={NotReady} />
        <Route path="/just-for-you" component={NotReady} />
        <Route path="/login" component={NotReady} />
      </Switch>
    </BrowserRouter>
  );
};

export default Root;
