import { Router } from "express";
import { getCourses, getCourse } from "../controllers/courseController";
const router = Router();

router.get("/", getCourses);
router.get("/:id", getCourse);

export default router;
