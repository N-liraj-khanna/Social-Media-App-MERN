const Media = require("../models/media.models");

exports.dataController = async (req, res) => {
  const data = await Media.find();
  return res.json({ data: data });
};

exports.singleDataController = async (req, res) => {
  const data = await Media.findById(req.params.id);
  return res.json({ data: data });
};
