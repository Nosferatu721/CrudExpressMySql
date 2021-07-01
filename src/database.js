const mysql = require("mysql2");
const { configDB } = require("./keys");
const { promisify } = require("util");

const pool = mysql.createPool(configDB);

// * Coneccion a la Base de Datos
pool.getConnection((err, connection) => {
  if (err) {
    console.log("ERROR DB_CONNECTION::", err);
  }
  if (connection) connection.release();
  console.log("DB is Connected");
  return;
});

pool.query = promisify(pool.query);

module.exports = pool;
