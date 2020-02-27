import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "./Home";
import Vacation from "./Vacation";
import Activity from "./Activity";
import Analysis from "./Analysis";



function App() {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/analysis">
          <Analysis></Analysis>
        </Route>
        <Route path="/activity">
          <Activity></Activity>
        </Route>
        <Route path="/vacation">
          <Vacation></Vacation>
        </Route>
        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
