import crypto from 'crypto';

// Hashing Function (SHA-256)
export const createHash = (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ message: 'Please provide a message to hash' });
  }

  const hash = crypto.createHash('sha256')
    .update(message)
    .digest('hex');

  res.status(200).json({
    message: 'Hashed value created successfully!',
    hash
  });
};

// AES Encryption Function
export const encryptMessage = (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ message: 'Please provide a message to encrypt' });
  }

  // AES encryption key and IV
  const secretKey = crypto.randomBytes(32);  // 256-bit key
  const iv = crypto.randomBytes(16);         // 128-bit IV

  // Encrypt the message
  const cipher = crypto.createCipheriv('aes-256-cbc', secretKey, iv);
  let encrypted = cipher.update(message, 'utf8', 'hex');
  encrypted += cipher.final('hex');

  res.status(200).json({
    message: 'Message encrypted successfully!',
    encryptedMessage: encrypted,
    key: secretKey.toString('hex'),
    iv: iv.toString('hex')
  });
};

// AES Decryption Function
export const decryptMessage = (req, res) => {
  const { encryptedMessage, key, iv } = req.body;

  if (!encryptedMessage || !key || !iv) {
    return res.status(400).json({ message: 'Please provide encrypted message, key, and iv for decryption' });
  }

  // Convert hex string back to Buffer
  const keyBuffer = Buffer.from(key, 'hex');
  const ivBuffer = Buffer.from(iv, 'hex');

  // Decrypt the message
  const decipher = crypto.createDecipheriv('aes-256-cbc', keyBuffer, ivBuffer);
  let decrypted = decipher.update(encryptedMessage, 'hex', 'utf8');
  decrypted += decipher.final('utf8');

  res.status(200).json({
    message: 'Message decrypted successfully!',
    decryptedMessage: decrypted
  });
};
