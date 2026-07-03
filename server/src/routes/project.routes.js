import express from "express";
import {create, getAll} from "../controllers/project.controller.js";
import {protect} from "../middleware/auth.middleware.js";

const router = express.Router();

router.post('/', protect, create);
router.get('/', protect, getAll);
export default router;
