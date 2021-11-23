import React from "react";
import { Link } from "react-router-dom";
const Media = ({ media }) => {
  return (
    <div className="card media-main" style={{ width: "18rem" }}>
      <Link to={`/medias/${media._id}`}>
        <img className="card-img-top" src={media.image} alt="media-img" />
      </Link>
      <div className="card-body">
        <Link to="/user" style={{ textDecoration: "none" }}>
          <h6 className="font-italic">By {media.user}</h6>
        </Link>
        <Link to={`/medias/${media._id}`} style={{ textDecoration: "none" }}>
          <h5 className="card-title">{media.subject}</h5>
        </Link>
        <p className="card-text text-justify">
          {media.descriptions.substring(0, 255)}
          <strong>. . . </strong>
          <Link className="card-link" to={`/medias/${media._id}`}>
            Read More
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Media;
