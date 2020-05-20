/*
Para usar el apiRest tan solo renombre el archivo 
config-copia.js a config.js
*/

const IP_SERVER_LOCAL = 'localhost';
const PORT_DB_LOCAL = '27017';
const NOMBRE_LOCAL_BBDD = 'tubbdd'
const MONGO_DB_ALTAS = "tubbddonline";
const MONGO_DB_ALTAS_HOST = "mongodb.net";
const MONGO_DB_ALTAS_USER = "root";
const MONGO_DB_ALTAS_PASSWORD = "root";
const SECRETJWT = process.env.SECRET || "root";
const PORT = process.env.PORT || 3977;
const API_VERSION = "v1";

module.exports = {
  MONGO_DB_ALTAS,
  MONGO_DB_ALTAS_HOST,
  MONGO_DB_ALTAS_USER,
  MONGO_DB_ALTAS_PASSWORD,
  SECRETJWT,
  PORT, IP_SERVER_LOCAL,
  PORT_DB_LOCAL,
  NOMBRE_LOCAL_BBDD,
  API_VERSION
};