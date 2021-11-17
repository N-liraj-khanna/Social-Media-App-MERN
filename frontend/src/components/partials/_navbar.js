import React from 'react'
import {Link} from "react-router-dom";
const Navbar = () => {

  const profilePic="/img/profile.jpg";

  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/"><span>Home</span></Link>
        <Link to="/about"><span>About</span></Link>
        <Link to="/contact"><span>Contact</span></Link>
        <Link to="/write"><span>Write</span></Link>
        <Link to="/logout"><span>Logout</span></Link>
      </div>
      <div className="user-search">
        <span className="fas fa-search fa-lg"></span>
        <span className="profile-pic"><img src={profilePic}/></span>
      </div>

    </nav>
  )
}

export default Navbar
