import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./components/Login";
// import { axiosWithAuth } from "./components/AxiosWithAuth";
// import ProtectedRoute from "./components/ProtectedRoute";
// import FriendsList from "./components/FriendsList";
function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/login"> LogIn</Link>
          {/* <Link to="/protected"> Protected Page</Link> */}
        </nav>
        <Route exact path="/login" component={Login} />
        {/* <ProtectedRoute exact path="/protected" component={FriendsList} />> */}
      </div>
    </Router>
  );
}

export default App;
