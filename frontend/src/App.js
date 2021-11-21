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
import MediaDetail from "./components/MediaDetail";
import Write from "./components/Write";

function App() {
  const profilePic = "http://localhost:5000/images/profile.jpg";
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/medias"
            element={<MediaHome profilePic={profilePic} />}
          />
          <Route path="/medias/:id" element={<MediaDetail profilePic={profilePic} />} />
          <Route path="/write" element={<Write profilePic={profilePic} />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
