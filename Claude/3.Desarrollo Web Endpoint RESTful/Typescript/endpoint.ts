import express from 'express';
import type { Request, Response, NextFunction, Application } from 'express';

interface SaludoRequest {
    nombre?: string;
}

interface SaludoResponse {
    mensaje: string;
    status: 'success' | 'error';
}

const app: Application = express();
const PORT: number = Number(process.env.PORT) || 3000;

// Middleware para parsear JSON
app.use(express.json());

// GET /saludo
app.get('/saludo', (req: Request, res: Response<SaludoResponse>): void => {
    const nombre: string = (req.query.nombre as string) || 'Usuario';

    const response: SaludoResponse = {
        mensaje: `Hola, ${nombre}`,
        status: 'success',
    };

    res.json(response);
});

// POST /saludo
app.post(
    '/saludo',
    (req: Request<{}, SaludoResponse, SaludoRequest>, res: Response<SaludoResponse>): void => {
        const nombre: string = req.body?.nombre?.trim() || 'Usuario';

        const response: SaludoResponse = {
            mensaje: `Hola, ${nombre}`,
            status: 'success',
        };

        res.status(201).json(response);
    }
);

// Middleware de manejo de errores
app.use((err: Error, req: Request, res: Response<SaludoResponse>, next: NextFunction): void => {
    console.error('[ERROR]', err.stack);

    res.status(500).json({
        mensaje: 'Error interno del servidor',
        status: 'error',
    });
});

// Inicio del servidor
app.listen(PORT, () => {
    console.log(`Servidor TypeScript ejecutándose en http://localhost:${PORT}`);
});

export default app;
