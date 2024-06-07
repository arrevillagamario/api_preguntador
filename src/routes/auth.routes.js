import { Router } from "express";
import {
  login,
  register,
  getUsuarios,
} from "../controllers/auth.controller.js";
import {
  preguntas,
  getPreguntas,
  getPreguntasPorCategoria,
} from "../controllers/preguntas.controller.js";

const router = Router();

router.post("/api/register", register);
router.post("/api/login", login);
router.post("/api/preguntas", preguntas);
router.get("/api/preguntas", getPreguntas);
router.get("/api/preguntas/categoria/:categoria", getPreguntasPorCategoria);
router.get("/api/usuarios", getUsuarios);
export default router;
