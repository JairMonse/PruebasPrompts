const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// GET endpoint
app.get('/saludo', (req, res) => {
    const nombre = req.query.nombre || 'Usuario';
    res.json({
        mensaje: `Hola, ${nombre}`,
        status: 'success'
    });
});

// POST endpoint
app.post('/saludo', (req, res) => {
    const nombre = req.body?.nombre || 'Usuario';
    res.status(201).json({
        mensaje: `Hola, ${nombre}`,
        status: 'success'
    });
});

// Manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        mensaje: 'Error interno del servidor',
        status: 'error'
    });
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en puerto ${PORT}`);
});

module.exports = app;