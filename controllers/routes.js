const router = require("express").Router();
const path = require("path");

router.get("/exercise", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/../public/exercise.html"));
});

router.get("/stats", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/../public/stats.html"));
});

router.get("/index", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/../public/index.html"));
});

module.exports = router;
