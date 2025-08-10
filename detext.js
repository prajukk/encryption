const crypto = require('crypto');

// Function to decrypt text using AES algorithm
function decryptText(encryptedText, secretKey) {
    const decipher = crypto.createDecipher('aes-256-cbc', secretKey);
    let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

// Example usage
const encryptedText = '266d480dece294e5a95299ab7ea67e62bfb6aa0ea2212cd9648b2d6f85744cbb'; // Replace this with your encrypted text
const secretKey = 'YourSecretKeyHere'; // Replace this with your secret key
const decryptedText = decryptText(encryptedText, secretKey);
console.log('Decrypted Text:', decryptedText);
