const router = require("express").Router();
const {dataController, singleDataController} = require("../controllers/data.controller");

router.get("/test", dataController);
router.get("/test/:id", singleDataController);

module.exports = router;
