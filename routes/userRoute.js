const express = require("express");
const router = express.Router();
const {
  allUsers,
  authUser,
  registerUser,
} = require("../controllers/userControllers");
const { protect } = require("../middlewares/authMiddleware");
router.route("/").get(protect, allUsers);
router.route("/").post(registerUser);
router.post("/login", authUser);
module.exports = router;
