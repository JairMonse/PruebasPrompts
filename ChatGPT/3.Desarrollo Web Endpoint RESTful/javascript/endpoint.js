const express = require('express');
const app = express();
app.get('/saludo', (req, res) => {
    const nombre = req.query.nombre || '';
    res.json({ mensaje: `Hola, ${nombre}` });
});
app.listen(3000, () => console.log("Servidor escuchando en puerto 3000"));

// Prueba con:
// curl "http://localhost:3000/saludo?nombre=Juan"
