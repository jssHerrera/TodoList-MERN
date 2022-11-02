import { Router } from "express";
import {
  getTasks,
  getTask,
  createTaskpost,
  updateTaskPut,
  deleteTask,
} from "../controllers/router.controller.js";

const router = Router();

router.get("/", getTasks);
router.get("/:id", getTask);
router.post("/", createTaskpost);
router.put("/:id", updateTaskPut);
router.delete("/:id", deleteTask);

export default router;
