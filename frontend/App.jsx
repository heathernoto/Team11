import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SearchResultsPage from "./pages/SearchResultsPage";
import HomePage from "./pages/HomePage";
import SubmitFormPage from "./pages/SubmitFormPage";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/styles.css";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route
          path="/"
          render={({ location, history }) => {
            if (location.search == "?search") return <SearchResultsPage location={location} history={history}/>;
            else if (location.search == "?submit") return <SubmitFormPage location={location} history={history}/>;
            else return <HomePage location={location} history={history}/>;
          }}
        />
      </Switch>
    </Router>
  );
};

export default App;