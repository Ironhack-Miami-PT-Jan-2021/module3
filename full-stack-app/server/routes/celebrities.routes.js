const router = require("express").Router();
const Celebrities = require("../models/Celebrity.model");

/* GET home page */
router.get("/", async (req, res, next) => {
  const celebrities = await Celebrities.find({}, { name: 1 });
  res.json({ celebrities });
});

router.get("/:id", async (req, res, next) => {
  const celebrity = await Celebrities.findById(req.params.id);
  res.status(200).json({ celebrity });
});

module.exports = router;
