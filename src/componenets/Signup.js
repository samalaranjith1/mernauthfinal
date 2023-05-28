import React, { useState } from "react";
import "../App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (
      username &&
      email &&
      password &&
      confirmPassword &&
      password === confirmPassword
    ) {
      console.log("Successfully signed up , Thank you:", {
        username,
        email,
        password,
        confirmPassword,
      });
      const data = { username, password };

      try {
        await axios
          .post("http://localhost:8000/signup", {
            username,
            email,
            password,
          })
          .then((res) => {
            if (res.data == "exit") {
              alert("User already exits , please login");
              navigate("/login", { state: data });
            } else if (res.data == "notexit") {
              alert("User registration successful, please login");
              navigate("/login", { state: data });
            }
          })
          .catch((error) => {
            alert("wrong details");
            console.log(error);
          });
      } catch (error) {
        console.log("Error occured signup catch block" + error);
      }
      navigate("/login", { state: data });
    }
  }
  const navigate = useNavigate("");

  const handleLogin = (e) => {
    navigate("/login", { replace: true });
  };

  return (
    <form onSubmit={handleSubmit} action="POST">
      <label>
        Username:
        <br />
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <label>
        Email:
        <br />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <label>
        Confrim Password:
        <br />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Sign Up</button>
      <button onClick={handleLogin}>Login</button>
    </form>
  );
};

export default Signup;
