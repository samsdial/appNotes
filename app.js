// app.js
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const estudiantesRoutes = require("./routes/estudiantes");
const materiaRoutes = require("./routes/materia");
const app = express();
// Middleware
app.use(express.json());
// conexion a la base de datos
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Conectado a la base de datos"))
  .catch((err) =>
    console.error(`no se puede conectar a la base de datos: ${err}`)
  );

// rutas
app.use("/api/estudiantes", estudiantesRoutes);
app.use("/api/materia", materiaRoutes);

// conexion a la base de datos

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
