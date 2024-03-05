import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";

import "./App.css";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
