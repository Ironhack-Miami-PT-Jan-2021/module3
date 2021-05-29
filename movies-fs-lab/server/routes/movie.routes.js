const router = require("express").Router();
const Movie = require("../models/Movie.model");

/* GET home page */
// http://localhost:5005/api/movies
router.get("/", (req, res, next) => {
  Movie.find({})
    .limit(10)
    .then((moviesFromDB) => {
      res.json({ movies: moviesFromDB });
    });
});
// http://localhost:5005/api/movies/:id
router.get("/:id", (req, res, next) => {
  Movie.findById(req.params.id).then((movieFromDB) => {
    res.json({ movie: movieFromDB });
  });
});

// http://localhost:5005/api/movies/create
router.post("/create", (req, res, next) => {
  Movie.create(req.body).then((createdMovie) => {
    res.json({ movie: createdMovie });
  });
});

router.post("/:id/delete", (req, res, next) => {
  Movie.findByIdAndRemove(req.params.id).then((_) => {
    res.status(200).json({ message: "Successfully removed the movie" });
  });
});

router.post("/:id/edit", (req, res, next) => {
  Movie.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
    (updatedMovie) => {
      res.json({ movie: updatedMovie });
    }
  );
});

module.exports = router;
