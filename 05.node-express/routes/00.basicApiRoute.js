import express from 'express';
import {getData, createData} from '../controllers/00.basicApiController.js';
const router = express.Router();

// GET endpoint
router.get('/', getData);

// POST endpoint
router.post('/', createData);

export default router;