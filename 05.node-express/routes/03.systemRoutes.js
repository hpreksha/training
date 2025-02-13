import express from 'express';
import { getSystemInfo } from '../controllers/03.systemController.js';

const router = express.Router();

// Route for getting system, file path, and URL info
router.get('/system-info', getSystemInfo);

export default router;
