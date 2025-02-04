import crypto from 'crypto';

// Create a hash of a string using SHA-256 algorithm
const hash = crypto.createHash('sha256')
.update('Hello, this is a test message!')
.digest('hex');

console.log('Hashed Value:', hash);

// Verify the hash by comparing the string with the expected hash
const originalMessage = 'Hello, this is a test message!';
const hashToVerify = crypto.createHash('sha256');
hashToVerify.update(originalMessage);
const hashValueToVerify = hashToVerify.digest('hex');

// Compare the hashes
if (hash === hashValueToVerify) {
  console.log('The hash matches!');
} else {
  console.log('The hash does not match!');
}
