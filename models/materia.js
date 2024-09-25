const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const materiaSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  estudiantes: [
    {
      type: Schema.Types.ObjectId,
      ref: "Estudiante",
    },
  ],
  profesor: {
    type: String,
    required: true,
  },
});

const Materia = mongoose.model("Materia", materiaSchema);

module.exports = Materia;
