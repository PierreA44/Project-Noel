const express = require("express");

const router = express.Router();

const { add } = require("../controllers/userControllers");
const { hash } = require("../services/hashed");

// router.get("/", browse);
router.post("/", hash, add);

module.exports = router;
