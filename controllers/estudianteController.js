// const estudiantes = require("../models/estudiante");
const Estudiantes = require("../models/estudiante");

exports.obtenerEstudiantes = async (req, res) => {
  try {
    const estudiantes = await Estudiantes.find();
    res.status(200).json(estudiantes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.crearEstudiante = async (req, res) => {
  try {
    const nuevoEstudiante = new Estudiantes(req.body);
    await nuevoEstudiante.save();
    res.status(201).json(nuevoEstudiante);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.obtenerEstudiantePorID = async (req, res) => {
  try {
    const idEstudiante = req.params.idEstudiante;
    const estudiante = await Estudiantes.findById(idEstudiante);
    if (!estudiante) {
      return res.status(404).json({ mensaje: "estudiante no encontrado" });
    }
    res.status(200).json(estudiante);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.actualizarEstudiante = async (req, res) => {
  try {
    const idEstudiante = req.params.idEstudiante;
    const nuevoEstudiante = req.body;
    const estudiante = await Estudiantes.findByIdAndUpdate(
      idEstudiante,
      nuevoEstudiante,
      { new: true }
    );
    if (!estudiante) {
      return res.status(404).json({ mensaje: "estudiante no encontrado" });
    }
    console.log(` estudiante actualizado con id: ${idEstudiante}`);
    res.status(200).json(estudiante);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.eliminarEstudiante = async (req, res) => {
  try {
    const idEstudiante = req.params.idEstudiante;
    const estudiante = await Estudiantes.findByIdAndDelete(idEstudiante);
    if (!estudiante) {
      return res.status(404).json({ mensaje: "estudiante no encontrado" });
    }
    console.log(estudiante);
    res
      .status(200)
      .json({ mensaje: `estudiante con id: ${idEstudiante} eliminado` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
