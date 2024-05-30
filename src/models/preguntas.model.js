import mongoose from "mongoose";

const preguntasSchema = new mongoose.Schema(
  {
    pregunta: {
      type: "String",
    },
    nivel: {
      type: "String",
    },
    categoria: {
      type: "String",
    },
    modo: {
      type: "String",
    },
    opciones: [
      {
        opcion: String,
        correcta: Boolean,
      },
      {
        opcion: String,
        correcta: Boolean,
      },
      {
        opcion: String,
        correcta: Boolean,
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Preguntas", preguntasSchema);
