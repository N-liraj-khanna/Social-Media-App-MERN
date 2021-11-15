const router = require("express").Router();

router.get("/testUser", (req, res) => {
  return res.send("this is a test user");
});

module.exports = router;
