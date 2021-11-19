import React from "react";
import { Link } from "react-router-dom";
const Media = ({ media }) => {
  return (
    <div className="media-main">
      <Link to="">
        <img src={media.image} alt="media" />
        <h1>{media.subject}</h1>
      </Link>
      <p>
        {media.descriptions.substring(0, 255)}
        <strong>. . . </strong>
        <Link className="read-more" to="">
          Read More
        </Link>
      </p>
    </div>
  );
};

export default Media;
