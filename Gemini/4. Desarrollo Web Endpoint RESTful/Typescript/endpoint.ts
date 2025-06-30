//npm install express npm install --save-dev @types/express

import express, { Request, Response } from 'express';

// Crear una instancia de la aplicación Express
const app = express();
const PORT = 3000;

// Middleware para parsear JSON en el cuerpo de las peticiones (si fuera necesario)
app.use(express.json());

/**
 * Define el endpoint GET /saludo/:nombre
 * - :nombre es un parámetro de ruta dinámico.
 */
app.get('/saludo/:nombre', (req: Request, res: Response) => {
  // Obtiene el parámetro 'nombre' de la URL
  const nombre = req.params.nombre;

  // Valida que el nombre no esté vacío
  if (!nombre) {
    return res.status(400).json({ error: 'El parámetro "nombre" es requerido.' });
  }

  // Envía la respuesta con el saludo personalizado
  res.status(200).json({ saludo: `Hola, ${nombre}` });
});

// Inicia el servidor para que escuche en el puerto especificado
app.listen(PORT, () => {
  console.log(`--- Servidor RESTful escuchando en http://localhost:${PORT} ---`);
  console.log("Endpoint de prueba disponible en: http://localhost:3000/saludo/tu-nombre-aqui");
  console.log("\n--- Cómo Probar el Endpoint ---");
  console.log("1. Abre tu navegador web y ve a: http://localhost:3000/saludo/Mundo");
  console.log(`2. O usa una herramienta como curl en tu terminal:`);
  console.log("   curl http://localhost:3000/saludo/Juan");
  console.log("   curl http://localhost:3000/saludo/Ana");
  console.log("\nPresiona CTRL+C para detener el servidor.");
});