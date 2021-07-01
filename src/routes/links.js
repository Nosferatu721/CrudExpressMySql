const express = require("express");
const router = express.Router();
const pool = require("../database");

router.get("/add", (req, res) => {
  const consults = async () => {
    try {
      const promisePool = pool.promise();
      let [restaurantes, fieldsRestaurantes] = await promisePool.query(
        "SELECT * FROM restaurante"
      );
      let [cargos, fieldsCargos] = await promisePool.query(
        "SELECT * FROM cargo"
      );
      res.render("links/add", { restaurantes, cargos });
    } catch (error) {
      console.log("ERROR SQL::", error.sqlMessage);
      res.send("ERROR SQL::" + error.sqlMessage);
    }
  };
  consults();
});

router.post("/add", (req, res) => {
  console.log(req.body);
  res.send("Received");
});

module.exports = router;
