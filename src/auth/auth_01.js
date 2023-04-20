const express = require('express');
const router = express.Router();
const admin = require('firebase-admin');

// Inicializa la aplicación de Firebase
const serviceAccount = require('ruta/a/serviceAccountKey.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Autentica al usuario con Firebase
    const user = await admin.auth().signInWithEmailAndPassword(email, password);

    // Genera un token de acceso para el usuario
    const token = await admin.auth().createCustomToken(user.uid);

    // Envía el token de acceso al usuario
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
