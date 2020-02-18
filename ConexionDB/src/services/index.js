const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const qr = require("qr-image");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "react_sort"
});

// QUERYS
const SELECT_USERS_NAME_QUERY = "SELECT nombre FROM user";
const SELECT_ALL_USERS_QUERY = "SELECT * FROM user";
const LIMPIAR_SORTEO_PERSONALIZADO_QUERY =
  "TRUNCATE TABLE sorteo_personalizado";
const LIMPIAR_PARTICIPANTES_QUERY = "TRUNCATE TABLE user";

//METODOS

const qrGenerate = () => {
  const code = qr.imageSync("http://10.10.11.60:3000/participantes", {
    type: "svg",
    size: 10,
    margin: 2
  });
  return code;
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const limpiarTablas = () => {
  connection.query(LIMPIAR_SORTEO_PERSONALIZADO_QUERY, (err, result) => {
    if (err) {
      return res.send(err);
    }
  });

  connection.query(LIMPIAR_PARTICIPANTES_QUERY, (err, result) => {
    if (err) {
      return res.send(err);
    }
  });
};

const insertarAdmin = nombre => {
  const INSERT_ADMIN_USER_QUERY = `INSERT INTO user (nombre, admin, id_sorteo) VALUES('${nombre}', true, 1)`;
  connection.query(INSERT_ADMIN_USER_QUERY, (err, result) => {
    if (err) {
      return res.send(err);
    }
  });
};

const getUserIdByName = (req, res) => {
  connection.query(
    `SELECT id FROM user WHERE nombre = '${req.params.nombre}'`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        // console.log(result[0].id)
        res.status(200).send(result);
      }
    }
  );
};

// const generateDraw = () => {
//     let sorteado;
//     const query = await connection.query("SELECT id FROM user", (err, result) => {
//         if (err) {
//             console.log(err);
//         }
//         else {
//             const cantidad = result.length;
//             sorteado = getRandomInt(1, cantidad + 1);
//             console.log("sorteado=" + sorteado);
//         }
//     })
//     return sorteado;
// }

// const showDraw = (sorteado) => {
//   connection.query(`SELECT nombre FROM user WHERE id = ${sorteado}`, (err, result) => {
//       if(err) {
//           console.log(err);
//       } else{
//           console.log(result);
//           return result;
//       }
//   })
// }

const getGanador = (req, res) => {
  const { nombre } = req.body;
  return nombre;
};

const dataToObject = (req, res) => {
  let data;
  connection.query(SELECT_USERS_NAME_QUERY, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      data = Object.values(results[0]);
      console.log(data);
    }
  });
  return data;
};

const getUsers = (req, res) => {
  connection.query(SELECT_ALL_USERS_QUERY, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      res.send(results);
    }
  });
};

const getSorteo = (req, res) => {
  connection.query(
    `SELECT MAX(id_sorteo) AS id_sorteo, nombre_sorteo, minimo_participantes FROM sorteo_personalizado GROUP BY nombre_sorteo, minimo_participantes`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).send(result);
      }
    }
  );
};

const addUser = (req, res) => {
  //estructura de tabla
  const { nombre } = req.body;
  console.log(nombre);
  const INSERT_USER_QUERY = `INSERT INTO user (nombre, admin, id_sorteo) VALUES('${nombre}', false, 1)`;
  connection.query(INSERT_USER_QUERY, (err, result) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send("añadido correctamente");
    }
  });
};

const crearSorteo = (req, res) => {
  const { nombre, nombre_sorteo, minimo, seleccionados } = req.body;
  limpiarTablas();

  insertarAdmin(nombre);
  const INSERT_SORTEO_PERSONALIZADO_QUERY = `INSERT INTO sorteo_personalizado 
                                             (minimo_participantes, nombre_sorteo, cantidad_selecionados, participa, id_creador) 
                                             VALUES( ${minimo},'${nombre_sorteo}', ${seleccionados}, true, 1)`;
  connection.query(INSERT_SORTEO_PERSONALIZADO_QUERY, (err, result) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send(200);
    }
  });
};

module.exports = {
  getSorteo,
  getGanador,
  addUser,
  crearSorteo,
  getUsers,
  getUserIdByName,
  dataToObject,
  qrGenerate
};
