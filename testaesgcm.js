const crypto = require('crypto');
let message = '';
let key = '';
let encryptedData = '';
let authTag = '';
let iv = '';

// Encrypt a string using AES-GCM
function encryptString(message, key) {
  iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);

  encryptedData = cipher.update(message, 'utf8', 'hex');
  encryptedData += cipher.final('hex');

  authTag = cipher.getAuthTag();

  return {
    encryptedData,
    iv: iv.toString('hex'),
    authTag: authTag.toString('hex')
  };
}

// Example usage
function runEncryption() {
  message = JSON.stringify({'memberId':'11111777'});
  key = crypto.randomBytes(32);
  console.log('key:',key);

  const encrypted = encryptString(message, key);

  console.log('Original Message:', message);
  console.log('Encrypted Data:', encrypted.encryptedData);
  console.log('IV:', encrypted.iv);
  console.log('Auth Tag:', encrypted.authTag);
}

// Decrypt the encrypted data using AES-GCM
function decryptString(encryptedData, key, iv, authTag) {
  const decipher = crypto.createDecipheriv('aes-256-gcm', key, Buffer.from(iv, 'hex'));
  decipher.setAuthTag(Buffer.from(authTag, 'hex'));
  
  let decryptedData = decipher.update(encryptedData, 'hex', 'utf8');
  decryptedData += decipher.final('utf8');
  
  return decryptedData;
}
  
// Example usage
function runDecryption() {
  const encryptedData1 = encryptedData; // Replace with your encrypted data
  const key1 = Buffer.from(key, 'hex'); // Replace with your encryption key
  const iv1 = iv; // Replace with your initialization vector
  const authTag1 = authTag; // Replace with your authentication tag
  
  const decrypted = decryptString(encryptedData1, key1, iv1, authTag1);
  
  console.log('Decrypted Data:', decrypted);
}
  
  

runEncryption();
runDecryption();
