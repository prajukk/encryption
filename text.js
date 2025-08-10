const crypto = require('crypto');

// Function to encrypt text using AES algorithm
function encryptText(text, secretKey) {
    const cipher = crypto.createCipher('aes-256-cbc', secretKey);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
}

// Example usage
const textToEncrypt = 'Hello, jhewvcbjdsbvj  world!';
const secretKey = 'YourSecretKeyHere'; // Replace this with your secret key
const encryptedText = encryptText(textToEncrypt, secretKey);
console.log('Encrypted Text:', encryptedText);
