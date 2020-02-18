import React, { useState } from "react";

function LogIn() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("submitting");
  };

  return (
    <div className="LogIn">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          name="username"
          onChange={handleChange}
          value={credentials.username}
        />

        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
          value={credentials.password}
        />
     
      <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default LogIn;


