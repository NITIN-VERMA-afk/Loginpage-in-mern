import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Landingpage from "./Components/Landingpage";
import Posts from "./Components/Posts";
import Appbar from "./Components/Appbar";

import "./App.css";

function App() {
  return (
    <>
      <div>
        <Appbar />
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/post" element={<Posts />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
