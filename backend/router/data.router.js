const router = require("express").Router();
const {
  dataController,
  singleDataController,
} = require("../controllers/data.controller");
const { writeController } = require("../controllers/write.controller");

const multer = require("multer");
const upload = multer({ dest: "uploads/" });


router.get("/test", dataController);
router.get("/test/:id", singleDataController);

router.post("/write",  upload.any("image", 20), writeController);

module.exports = router;
