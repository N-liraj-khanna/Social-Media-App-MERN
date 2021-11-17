// ?General Imports 
import React from "react";
import "./styles/app.scss";

// ? Packages/Modules Imports
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// ?Component Imports
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import MediaHome from "./components/MediaHome";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/medias" element={<MediaHome/>} />
          <Route path="/" element={<Home/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
