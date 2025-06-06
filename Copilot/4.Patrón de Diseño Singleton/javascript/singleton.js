const express = require('express');
const app = express();

app.get('/saludo', (req, res) => {
    const nombre = req.query.nombre || 'amigo';
    res.send(`Hola, ${nombre}!`);
});

app.listen(3000, () => {
    console.log('Servidor en http://localhost:3000');
});
