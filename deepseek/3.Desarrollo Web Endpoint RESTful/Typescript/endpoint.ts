
//npm install express
//npm install --save-dev @types/express

import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.get('/saludo', (req: Request, res: Response) => {
    const nombre = req.query.nombre?.toString() || 'Mundo';
    res.json({ mensaje: `Hola, ${nombre}` });
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
    console.log(`Prueba con: curl "http://localhost:${port}/saludo?nombre=Juan"`);
});