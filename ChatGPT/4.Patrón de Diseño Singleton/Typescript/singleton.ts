// Anpm install express
//npm install --save-dev @types/express


import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.get('/saludo', (req: Request, res: Response) => {
  const nombre = req.query.nombre as string;
  if (nombre) {
    res.send(`Hola, ${nombre}`);
  } else {
    res.status(400).send("Falta el parámetro 'nombre'");
  }
});

app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
