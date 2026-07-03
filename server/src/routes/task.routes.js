import express from 'express';
import { create } from '../controllers/task.controller.js';
import { protect } from '../middleware/auth.middleware.js';

const router = express.Router();

router.post('/', protect, create);

export default router