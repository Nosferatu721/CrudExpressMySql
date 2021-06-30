const mysql = require("mysql2");
const { promisify } = require("util");
const { database } = require("./keys");

const pool = mysql.createPool(database);

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
