const express = require("express");

const router = express.Router();

// Import productController add use it
const {
  browse,
  read,
  edit,
  add,
  destroy,
} = require("../controllers/productControllers");

router.get("/", browse);
router.post("/", add);
router.get("/:id", read);
router.put("/:id", edit);
router.delete("/:id", destroy);

module.exports = router;
