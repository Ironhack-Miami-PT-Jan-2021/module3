const router = require("express").Router();
const Celebrities = require("../models/Celebrity.model");

/* GET home page */
router.get("/", async (req, res, next) => {
  const celebrities = await Celebrities.find({});
  res.json({ celebrities });
});

module.exports = router;
