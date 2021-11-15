//* IMPORTS
const express = require("express");
require("dotenv").config({path: "./backend/config/config.env"});


//* CONSTANTS
const app = express();
const PORT = process.env.PORT || 8000;


//* ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Social Media App By N LirajKhanna");
});


//* GENERAL CONFIG
app.listen(PORT, () => {
  console.log(`Server up and running on ${PORT}`);
});