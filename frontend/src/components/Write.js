import React, { useState } from "react";
import NavBar from "./partials/_navbar";
import axios from "axios";

const Write = ({ profilePic }) => {
  const [myImage, setMyImage] = useState("");
  const formSubmitted = async (e) => {
    e.preventDefault();
    const form = document.getElementById("write-form");
    let formData = new FormData(form);
    formData.append("user", "LK");

    const response = await axios.post(
      "http://localhost:5000/api/data/write",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log(response);
  };

  return (
    <div className="write">
      <h1 className="media-heading">SPEAK OUT LOUD...</h1>
      <NavBar profilePic={profilePic} />
      <div className="container">
        <h1>Write what you feel like...</h1>
        <div className="row">
          <div className="col-md-12">
            <form
              onSubmit={formSubmitted}
              id="write-form"
              enctype="multipart/form"
            >
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
                      <input
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={(event) => {
                          setMyImage(event.target.files[0]);
                        }}
                      />
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
