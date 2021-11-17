// *General Imports
import React from "react";

// *Partials
import NavBar from "./partials/_navbar";



const MediaHome = () => {
  return (
    <div>
      <NavBar />
      <MediaFirstView />
    </div>
  );
};

export default MediaHome;

// *First view of Media Home page
const MediaFirstView = () => {
  return (
    <div>
      <h4>MERN</h4>
      <h1>SPEAK OUT LOUD</h1>
    </div>
  )
}