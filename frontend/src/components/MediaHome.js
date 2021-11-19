// *General Imports
import React, { useState, useEffect } from "react";
import axios from "axios";
// *Partials
import NavBar from "./partials/_navbar";
import Media from "./Media";

const getData = async (setMedia) => {
  const response = await axios.get("http://localhost:5000/api/data/test");
  setMedia(response.data.data);
};

const MediaHome = ({ profilePic }) => {
  const [medias, setMedias] = useState([]);
  useEffect(() => {
    getData(setMedias);
  }, []);
  return (
    <div className="media-home">
      <h1 className="media-heading">SPEAK OUT LOUD...</h1>
      <NavBar profilePic={profilePic} />
      <div className="medias-list">
        {medias.map((media) => (
          <Media media={media} key={media._id} />
        ))}
      </div>
    </div>
  );
};

export default MediaHome;
