import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Map } from "./pages";

const RouteContainer = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Map />
        </Route>
        {/* <Route path="/">
          <Home />
        </Route> */}
      </Switch>
    </Router>
  );
};

export default RouteContainer;
