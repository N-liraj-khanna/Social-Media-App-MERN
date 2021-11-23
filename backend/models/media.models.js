const mongoose = require("mongoose");

// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect("mongodb://127.0.0.1:27017/media?directConnection=true&serverSelectionTimeoutMS=2000");
//     console.log(
//       `Mongo DB Connected Successfully ${conn.connection.host}`
//     );
//   } catch (e) {
//     console.log(`MongoDB Connection Failed`);
//     console.log(`${e.message}`);
//     process.exit(1);
//   }
// };

// connectDB();

const MediaSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    minlength: 10,
    maxlength: 100,
    required: true,
  },
  descriptions: {
    type: String,
  },
  image: {
    type: String,
  },
});

const Media = mongoose.model("Media", MediaSchema);
module.exports = Media;

// const data = require("../data").module.data;

// data.forEach(async (m) => {
//   const newMedia = await new Media({
//     subject: m.subject,
//     descriptions: m.descriptions,
//     user: m.user,
//     image: m.image,
//   });
//   await newMedia.save();
// });
