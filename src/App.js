import "./App.css";
import Download from "./componenets/Download";
import Login from "./componenets/Login";
import Signup from "./componenets/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter className="App">
      <div className="App">
        <Routes>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/" element={<Login />} />
          <Route path="/download" element={<Download />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
