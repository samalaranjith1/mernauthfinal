import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Successful");
  };
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

async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/",{
                email,password
            })
            .then(res=>{
                if(res.data=="exist"){
                    history("/home",{state:{id:email}})
                }
                else if(res.data=="notexist"){
                    alert("User have not sign up")
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }

