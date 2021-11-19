import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1>Speak Out Loud</h1>
      <img
        src="http://localhost:5000/images/logo.png"
        alt="Logo"
        width="128"
        height="128"
      />
      <div className="buttons">
        <Link to="/signup">
          <span className="text">Sign Up</span>
          <span className="line -right"></span>
          <span className="line -top"></span>
          <span className="line -left"></span>
          <span className="line -bottom"></span>
        </Link>
        <Link to="/login">
          <span className="text">Login</span>
          <span className="line -right"></span>
          <span className="line -top"></span>
          <span className="line -left"></span>
          <span className="line -bottom"></span>
        </Link>
      </div>
    </div>
  );
};

export default Home;
