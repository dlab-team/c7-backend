const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../user/application/model/user.model.js');

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Busca al usuario por su email
    const user = await User.findOne({ email });

    // Si el usuario no existe, retorna un error
    if (!user) {
      return res.status(401).json({ error: 'Credenciales incorrectas' });
    }

    // Compara la contraseña ingresada con la almacenada en la base de datos
    const match = await bcrypt.compare(password, user.password);

    // Si la contraseña no coincide, retorna un error
    if (!match) {
      return res.status(401).json({ error: 'Credenciales incorrectas' });
    }

    // Genera un token de acceso para el usuario
    const token = jwt.sign({ userId: user._id }, 'secreto');

    // Envía el token de acceso al usuario
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
