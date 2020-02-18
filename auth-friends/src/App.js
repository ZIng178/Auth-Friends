import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./components/Login";
// import { axiosWithAuth } from "./components/AxiosWithAuth";
import PrivateRoute from "./components/PrivateRoute";
import FriendsList from "./components/FriendsList";
function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            
            <Link to="/login"> LogIn</Link>
          </li>

          <li>
            <Link to="/protected"> Protected Page</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/login" component={Login} />
          <PrivateRoute path="/protected" component={FriendsList} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
