import React from "react";
import NavBar from "./partials/_navbar";

const Write = ({ profilePic }) => {
  const formSubmitted = (e) => {
    e.preventDefault();
  };

  return (
    <div className="write">
      <h1 className="media-heading">SPEAK OUT LOUD...</h1>
      <NavBar profilePic={profilePic} />
      <div className="container">
        <h1>Write what you feel like...</h1>
        <div className="row">
          <div className="col-md-12">
            <form onSubmit={formSubmitted}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  placeholder="Your Subject"
                />
              </div>
              <div className="form-group">
                <div className="input-group">
                  <span className="input-group-btn">
                    <span className="btn btn-primary btn-file">
                      Upload your image
                      <input type="file" name="image" accept="image/*" />
                    </span>
                  </span>
                </div>
              </div>
              <div className="form-group">
                <textarea
                  className="form-control bcontent"
                  name="descriptions"
                  placeholder="What do you feel like?"
                ></textarea>
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  name="submit"
                  value="Submit"
                  className="btn btn-primary form-control"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
