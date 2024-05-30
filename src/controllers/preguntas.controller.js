import Preguntas from "../models/preguntas.model.js";

export const preguntas = async (req, res) => {
  const { pregunta, nivel, categoria, modo, opciones } = req.body;
  try {
    const newPregunta = new Preguntas({
      pregunta,
      nivel,
      categoria,
      modo,
      opciones,
    });
    const preguntas = await newPregunta.save();

    res.json({
      id: preguntas._id,
      pregunta: preguntas.pregunta,
      nivel: preguntas.nivel,
      categoria: preguntas.categoria,
      modo: preguntas.modo,
      opciones: preguntas.opciones,
    });
  } catch (error) {
    console.log(error);
  }
};
export const getPreguntas = async (req, res) => {
  const PreguntasTotales = await Preguntas.find();

  res.json(PreguntasTotales);
};
