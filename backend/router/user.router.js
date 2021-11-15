const router = require("express").Router();
const {userController} = require("../controllers/user.controller");

router.get("/testUser", userController);

module.exports = router;
