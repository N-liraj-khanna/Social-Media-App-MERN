const router = require("express").Router();
const {dataController} = require("../controllers/data.controller");

router.get("/test", dataController);

module.exports = router;
