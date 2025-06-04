const express = require('express');
const app = express();

app.get('/saludar', (req, res) => {
    const nombre = req.query.nombre || 'Mundo';
    res.json({ mensaje: `Hola, ${nombre}` });
});

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});