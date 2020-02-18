import React, { useState } from "react";
import {axiosWithAuth} from "./AxiosWithAuth";

const LogIn = props=> {
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
    axiosWithAuth()
    .post(`http://localhost:5000/api/login`, credentials)
    .then(res=>{
      console.log("This is the response from the server:",res)
      localStorage.setItem("token",res.data.payload)
      console.log("LogIn props:",props)
      props.history.push("/protected")
    })
    .catch(err=> console.log("invalid login", err))
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
     
      <button onClick ={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default LogIn;


