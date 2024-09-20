const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const materiaSchema = new Schema({
  nombre: {
    type: String,
    require: true,
  },
  estudiantes: [
    {
      type: Schema.Types.ObjectId,
      ref: "Estudiante",
    },
  ],
  profesor: {
    type: String,
    require: true,
  },
});

const Materia = mongoose.model("Materia", materiaSchema);

module.exports = Materia;
