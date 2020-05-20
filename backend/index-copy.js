const mongoose = require("mongoose");
const app = require("./app");
const port = process.env.PORT || 3977;
const {
  API_VERSION,
  IP_SERVER_LOCAL,
  NOMBRE_LOCAL_BBDD,
  PORT_DB_LOCAL,
  PORT
} = require("./config");
const { MONGO_DB_ALTAS, MONGO_DB_ALTAS_PASSWORD } = require("./config");

mongoose.set("useFindAndModify", false);

mongoose.connect(
  `mongodb+srv://tu_bbdd_remota:tu_pass_remotag@cluster0-wvci9.mongodb.net/test?retryWrites=true&w=majority`,
  /* `mongodb://${IP_SERVER_LOCAL}:${PORT_DB_LOCAL}/${NOMBRE_LOCAL_BBDD}`, */
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err, res) => {
    if (err) {
      throw err;
    } else {
      console.log("La conexion a la base de datos es correcta.");

      app.listen(port, () => {
        console.log("##############################");
        console.log("########", "API REST", `${API_VERSION}`, "#########");
        console.log("##############################");
        console.log(`http://${IP_SERVER_LOCAL}:${PORT}/api/${API_VERSION}/`);
      });
    }
  }
);
