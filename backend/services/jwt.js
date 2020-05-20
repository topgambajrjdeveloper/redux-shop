const jwt = require("jwt-simple");
const moment = require("moment");

const { SECRETJWT } = require("../config");
// Funcion para crear Token con JWT y Moment
exports.createAccessToken = function(user) {
  const payload = {
    id: user._id,
    name: user.name,
    lastname: user.lastname,
    email: user.email,
    role: user.role,
    createToken: moment().unix(),
    // El token de jwt caduca cada 3Horas
    exp: moment()
      .add(3, "hours")
      .unix()
  };

  return jwt.encode(payload, SECRETJWT);
};
// Funcion para refrescar Token con JWT y Moment
exports.createRefreshToken = function(user) {
  const payload = {
    id: user._id,
    exp: moment()
      .add(30, "days")
      .unix()
  };

  return jwt.encode(payload, SECRETJWT);
};
// Funcion decodifica Token con JWT y Moment
exports.decodedToken = function(token) {
  return jwt.decode(token, SECRETJWT, true);
};
