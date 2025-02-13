import express from 'express';
import { createHash, encryptMessage, decryptMessage } from '../controllers/02.cryptoController.js';

const router = express.Router();

// Route for hashing a message
router.post('/hash', createHash);

// Route for encrypting a message
router.post('/encrypt', encryptMessage);

// Route for decrypting a message
router.post('/decrypt', decryptMessage);

export default router;
