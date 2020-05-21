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
app.get(`/api/${API_VERSION}/product`, (req, res) => {
  res.send(data.products);
});
app.get(`/api/${API_VERSION}/product/:id`, (req, res) => {
  const productId = req.params.id;
  const product = data.products.find(x => x._id === productId);
  if (product)
    res.send(product);
  else res.status(404).send({ msg: 'Producto no encontrado' });
});

app.listen(PORT, () => {
  console.log(
    `Servidor iniciado en http://${IP_SERVER_LOCAL}:${PORT}/api/${API_VERSION}/product`
  );
});

module.exports = app;
