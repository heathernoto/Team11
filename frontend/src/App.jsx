import React from "react";
import "./css/styles.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SearchResultsPage from "./pages/SearchResultsPage";
import HomePage from "./pages/HomePage";
import SubmitFormPage from "./pages/SubmitFormPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route
          path="/"
          render={({ location }) => {
            if (location.search == "?search") return <SearchResultsPage />;
            else if (location.search = "?submit") return <SubmitFormPage />;
            else return <HomePage />;
          }}
        />
      </Switch>
    </Router>
  );
};

export default App;