const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

const SELECT_ALL_USERS_QUERY = "SELECT * FROM user";

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "react_sort"
});

connection.connect(err => {
  if (err) {
    return err;
  }
});

app.use(cors());

app.get("/", (req, res) => {
  res.send("buena boludoo");
});

app.get("/users", (req, res) => {
  connection.query(SELECT_ALL_USERS_QUERY, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      res.json({
        data: results
      });
    }
  });
});
app.get("/users/add", (req, res) => {
  //estructura de tabla
  const { nombre } = req.query;
  console.log(nombre);
  const INSERT_USER_QUERY = `INSERT INTO user (nombre, admin) VALUES('${nombre}', false)`;
  connection.query(INSERT_USER_QUERY, (err, result) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send("añadido correctamente");
    }
  });
});

app.listen(4000, () => {
  console.log("server running on port 4000");
});
