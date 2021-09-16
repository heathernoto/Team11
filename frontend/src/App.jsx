import React from "react";
import "./css/styles.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route
          path="/"
          render={({ location }) => {
            if (location.search == "?route") return <div>route</div>;
            else return <div>home</div>;
          }}
        />
      </Switch>
    </Router>
  );
};

export default App;