const express = require("express");
const router = express.Router();
const pool = require("../database");

router.get("/add", (req, res) => {
  res.render("links/add");
});

router.post("/add", (req, res) => {
  console.log(req.body);
  console.log(req.baseUrl);
  res.send("Received");
});

module.exports = router;