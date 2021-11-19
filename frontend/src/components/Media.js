import React from "react";
import { Link } from "react-router-dom";
const Media = ({ media }) => {
  return (
    <div className="card media-main" style={{ width: "18rem" }}>
      <img className="card-img-top" src={media.image} alt="media-img" />
      <div className="card-body">
        <h6 className="font-italic">By - {media.user}</h6>
        <h5 className="card-title">{media.subject}</h5>
        <p className="card-text text-justify">
          {media.descriptions.substring(0, 255)}
          <strong>. . . </strong>
          <Link className="card-link read-more" to={`/media/${media._id}`}>
            Read More
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Media;
