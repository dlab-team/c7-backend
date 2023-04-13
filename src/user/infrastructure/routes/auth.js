const express = require('express');
const router = express.Router();
const firebase = require('firebase');
const firebaseConfig = require('./firebaseConfig.json');

firebase.initializeApp(firebaseConfig);

router.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
  
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        res.send('Inicio de sesión exitoso!');
      })
      .catch((error) => {
        res.status(401).send(error.message);
      });
  });
  
  router.post('/signup', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
  
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        res.send('Registro exitoso!');
      })
      .catch((error) => {
        res.status(400).send(error.message);
      });
  });

  module.exports = router;

