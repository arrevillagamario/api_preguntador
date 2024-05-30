import { Router } from "express";
import { login, register } from "../controllers/auth.controller.js";
import {
  preguntas,
  getPreguntas,
} from "../controllers/preguntas.controller.js";

const router = Router();

router.post("/api/register", register);
router.post("/api/login", login);
router.post("/api/preguntas", preguntas);
router.get("/api/preguntas", getPreguntas);

export default router;
