import React, { useState, useEffect } from "react";
import NavBar from "./partials/_navbar";
import { useParams } from "react-router-dom";
import axios from "axios";

const MediaDetail = ({ profilePic }) => {
  const id = useParams().id;
  const [mediaDetail, setMediaDetail] = useState(null);
  useEffect(() => {
    const getMediaDetail = async (setMediaDetail, id) => {
      const response = await axios.get(
        "http://localhost:5000/api/data/test/" + id
      );
      setMediaDetail(response.data.data);
    };
    getMediaDetail(setMediaDetail, id);
  }, [id]);
  if (mediaDetail)
    return (
      <div className="media-detail">
        <h1 className="media-heading">SPEAK OUT LOUD...</h1>
        <NavBar profilePic={profilePic} />
      </div>
    );
  else return <div></div>;
};

export default MediaDetail;
