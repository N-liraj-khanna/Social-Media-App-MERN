// ?IMPORTS
const express = require("express");
const userRouter = require("./router/user.router");
const dummyDataRouter = require("./router/dummy_data.router");
require("dotenv").config({ path: "./backend/config/config.env" });

// ?CONSTANTS
const app = express();
const PORT = process.env.PORT || 8000;

// ?CONFIG
// *Routes Middleware
app.use("/api/user", userRouter);
app.use("/api/data", dummyDataRouter);

// ?GENERAL CONFIG
app.listen(PORT, () => {
  console.log(`Server up and running on ${PORT}`);
});
