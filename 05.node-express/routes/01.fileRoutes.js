import express from 'express';
import { readFile1, writeFile, appendFile } from '../controllers/01.fileController.js';

const router = express.Router();



// Route for reading a file
router.get('/read-file', readFile1);

// Route for writing to a file
router.post('/write-file', writeFile);

// Route for appending to a file
router.post('/append-file', appendFile);

export default router;
