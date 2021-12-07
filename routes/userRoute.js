const express = require("express");
const router = express.Router();
const {
  allUsers,
  authUser,
  registerUser,
} = require("../controllers/userControllers");
router.route("/").get( allUsers);
router.route("/").post(registerUser);
router.post("/login", authUser);
module.exports = router;
