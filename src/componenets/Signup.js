import React, { useState } from "react";
import "../App.css";
import { Routes, Route, useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
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
      navigate("/login", { state: data });
    }
  };
  const navigate = useNavigate("");

  const handleLogin = (e) => {
    navigate("/login", { replace: true });
  };

  return (
    <form onSubmit={handleSubmit}>
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
