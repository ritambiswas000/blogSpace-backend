const admin = require('firebase-admin');

// Decode from Base64
const firebaseKey = Buffer
  .from(process.env.FIREBASE_KEY_BASE64, 'base64')
  .toString('utf-8');

// Parse into an object
const serviceAccount = JSON.parse(firebaseKey);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;