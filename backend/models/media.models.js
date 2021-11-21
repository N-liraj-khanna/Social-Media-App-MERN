const mongoose = require("mongoose");

const MediaSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    minlength: 10,
    maxlength: 100,
    required: true
  },
  description: {
    type: String,
  },
  image: {
    data: Buffer,
    connectType: String,
  },
});

const Media = mongoose.model(MediaSchema);
module.exports = Media;

const data = require("../data");
data.forEach(async function (m) {
  const newMedia = await new Media({
    subject: m.subject,
    description: m.description,
    user: m.user,
    image: "",
  });
  await newMedia.save();
});
