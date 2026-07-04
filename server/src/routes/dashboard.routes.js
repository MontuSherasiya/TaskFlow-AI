import express from 'express';
import { summary, recentTasks } from '../controllers/dashboard.controller.js';
import {protect } from '../middleware/auth.middleware.js'

const router = express.Router();

router.get('/', protect, summary);
router.get("/recent-tasks", protect, recentTasks)

export default router;