exports.writeController = (req, res) => {
  console.log(req.files);
  console.log(req.body)
  return res.json({ a: "a" });
};
