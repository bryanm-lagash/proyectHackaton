const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
require("dotenv").config();
const SorteoService = require("./src/services/index");

const { HOST, USER, PASSWORD, DATABASE, PORT } = process.env;

const app = express();

//CONEXION BASE DE DATOS
const conn = mysql.createConnection({
  host: HOST,
  user: USER,
  password: PASSWORD,
  database: DATABASE
});

let _ganadores = [];

//Midelware
app.use(cors());
app.use(express.json());

//Routes

//Crear Sorteo
app.post("/createDraw", async (req, res) => {
  const {
    nombre,
    minimoParticipantes,
    sorteados,
    fechaSorteo,
    estado
  } = req.body;
  console.log(req.body);
  conn.query(
    // `INSERT INTO Sorteo (nombre, cantidadParticipantes, sorteados, fechaSorteo, estado) VALUES ( ${nombre}, ${cantidadParticipantes}, ${sorteados}, ${fechaSorteo}, ${estado} ) `,
    `INSERT INTO Sorteo (nombre, cantidadParticipantes, sorteados, fechaSorteo, estado) VALUES ('${nombre}', ${minimoParticipantes}, ${sorteados}, '${fechaSorteo}', '${estado}')`,
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.send(200);
      }
    }
  );
});

app.get("/", (req, res) => {
  conn.query("SELECT * FROM Sorteo", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.get("/users", SorteoService.getUsers);

app.post("/users/add", (req, res) => {
  SorteoService.addUser(req, res);
});

app.post("/crear", SorteoService.crearSorteo);

app.get("/getId/:nombre", (req, res) => {
  SorteoService.getUserIdByName(req, res);
});

//Endpoint devuelve ultimo sorteo
app.get("/getSorteo", SorteoService.getSorteo);

app.post("/ganadores", (req, res) => {
  _ganadores.push(SorteoService.getGanador(req, res));
  console.log(_ganadores);
  res.send(200);
});

app.get("/nombres", (req, res) => {
  SorteoService.dataToObject(req, res);
});

app.get("/getQR", (req, res) => {
  res.status(200).send(SorteoService.qrGenerate());
});

app.listen(PORT, (req, res) => {
  console.log(`server running on port: http://${HOST}:${PORT}`);
});

module.exports = app;
