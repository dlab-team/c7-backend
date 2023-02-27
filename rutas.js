//cargamos el paquete express y creamos nuestra app
const express = require('express');
const app = express();
const path = require('path');
const puerto = 3333;

//instanciamos router
const router = express.Router();

//enviamos nuestro index.html al usuario como página de inicio
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

//creamos las rutas solicitadas /dev-front /dev-back
router.get('/dev-front', function(req, res) {
    res.json({ nombre:'Hola! Felipe, Camilo, Damián, Federico, Daniel' });
});

router.get('/dev-back', function(req, res) {
    res.json({ nombre:'Hola! Elizabeth, Cristián P. Cristián A, Ignacio, Angela, Gian Carlo' });
});

//aplicamos el router a nuestra aplicación
app.use('/', router);

//iniciamos nuestro servidor en el puerto 3333
app.listen(puerto, () => {
    console.log(`El servidor está corriendo en http://localhost:${puerto}`);
});