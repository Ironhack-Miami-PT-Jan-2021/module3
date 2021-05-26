const router = require("express").Router();

const uploader = require("../config/cloudinary.config");

const Celebrity = require("../models/Celebrity.model");

/* GET home page */
router.post("/image-upload", uploader.single("image"), (req, res, next) => {
  console.log(req.file);
  res.json({ fileURL: req.file.path });
});

// creating Celebrity separately from uploading img to Cloudinary
router.post("/celebrity", async (req, res, next) => {
  const newCeleb = await Celebrity.create(req.body);
  res.json({ newCeleb });
});

// creating Celebrity at the same time as uploading img to Cloudinary(don't use)
router.post(
  "/celeb-with-img",
  uploader.single("image"),
  async (req, res, next) => {
    console.log(req.body);
    const newCeleb = await Celebrity.create({
      ...req.body,
      imgUrl: req.file.path,
    });
    res.json({ newCeleb });
  }
);

module.exports = router;
