const mongoose = require("mongoose");
require("colors");
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `Mongo DB Connected Successfully ${conn.connection.host}`.green
    );
  } catch (e) {
    console.log(`MongoDB Connection Failed`.red);
    console.log(`${e.message}`.red);
    process.exit(1);
  }
};

module.exports = connectDB;
