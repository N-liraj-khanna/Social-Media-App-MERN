// ?IMPORTS
const cors = require("cors");
const express = require("express");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");
const path = require("path");
const userRouter = require("./router/user.router");
const dataRouter = require("./router/data.router");
require("dotenv").config({ path: "./backend/config/config.env" });

// ?CONSTANTS
const app = express();
const PORT = process.env.PORT || 8000;

// ?CONFIG
// *Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

// *Connect to database server
connectDB();

// *Routes Middleware
app.use(cors());
app.use("/api/user", userRouter);
app.use("/api/data", dataRouter);

// ?GENERAL CONFIG
app.listen(PORT, () => {
  console.log(`Server up and running on ${PORT}`);
});
