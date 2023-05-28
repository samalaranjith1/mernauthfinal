import React, { useEffect, useState } from "react";
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  useHistory,
} from "react-router-dom";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate("");

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("Login Successful");
    try {
      await axios
        .post("http://localhost:8000/login", {
          username,
          password,
        })
        .then((res) => {
          if (res.data == "exist") {
            navigate("/download", { state: { id: username } });
          } else if (res.data == "notexist") {
            alert("User have not sign up");
          }
        })
        .catch((e) => {
          alert("wrong details");
          console.log(e);
        });
    } catch (error) {
      console.log("Error occured in login catch block" + error);
    }
  }
  const handleSignup = (e) => {
    navigate("/signup");
  };
  const location = useLocation();
  const data = location.state;
  useEffect(() => {
    if (data) {
      setUsername(data.username);
      setPassword(data.password);
    }
  }, []);

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
        Password:
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Login</button>
      <button onClick={handleSignup}>Signup</button>
    </form>
  );
}

export default Login;
