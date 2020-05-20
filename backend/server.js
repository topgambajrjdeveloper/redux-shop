const express = require("express");
//Datos prueba
import data from './data';

const bodyParser = require("body-parser");

const app = express();
const { API_VERSION, PORT, IP_SERVER_LOCAL } = require("./config");

// Load routings


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configure Header HTTP
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

// Router Basic
app.get(`/api/${API_VERSION}/products`, (req, res) => {
  res.send(data.products);
});

app.listen(PORT, () => {
  console.log(
    `Servidor iniciado en http://${IP_SERVER_LOCAL}:${PORT}/api/${API_VERSION}/products`
  );
});

module.exports = app;
