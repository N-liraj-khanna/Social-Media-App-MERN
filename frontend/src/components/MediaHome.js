// *General Imports
import React, { useState } from "react";
import axios from "axios";
// *Partials
import NavBar from "./partials/_navbar";
import Media from "./Media";

const getData = async (setMedia) => {
  const response = await axios.get("http://localhost:5000/api/data/test");
  setMedia(response.data.data);
};

const MediaHome = () => {
  const profilePic = "http://localhost:5000/images/profile.jpg";

  const [medias, setMedias] = useState([]);
  getData(setMedias);

  return (
    <div className="media-home">
      <NavBar profilePic={profilePic} />
      <h1 className="media-heading">SPEAK OUT LOUD...</h1>
      {medias.map((media)=>(
        <Media media={media} key={media._id}/>
      ))}
    </div>
  );
};

export default MediaHome;
