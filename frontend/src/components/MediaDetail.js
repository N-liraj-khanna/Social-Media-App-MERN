import React, { useState, useEffect } from "react";
import NavBar from "./partials/_navbar";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const MediaDetail = ({ profilePic }) => {
  const id = useParams().id;
  const [media, setMediaDetail] = useState(null);
  useEffect(() => {
    const getMediaDetail = async (setMediaDetail, id) => {
      const response = await axios.get(
        "http://localhost:5000/api/data/test/" + id
      );
      setMediaDetail(response.data.data);
    };
    getMediaDetail(setMediaDetail, id);
  }, [id]);
  if (media)
    return (
      <div className="media-detail">
        <h1 className="media-heading">SPEAK OUT LOUD...</h1>
        <NavBar profilePic={profilePic} />
        <div className="article-center">
          <article className="article">
            <div className="article-img">
              <img src={media.image} title="" alt="" />
            </div>
            <div className="article-title">
              <h6>
                <Link to="/tags">#tags</Link>
              </h6>
              <h2>{media.subject}</h2>
              <div className="media">
                <div className="avatar">
                  <img src={profilePic} alt="" />
                </div>
                <div className="media-body">
                  <label>{media.user}</label>
                  <span>11:59 Tuesday 2056{media.timestamp}</span>
                </div>
              </div>
            </div>
            <div className="article-content">
              <p>{media.descriptions}</p>
            </div>
          </article>
        </div>
      </div>
    );
  else return <div></div>;
};

export default MediaDetail;
