const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("hello!");
});

router.put("/", (req, res) => {
  res.send("hello!");
});

module.exports = router;
