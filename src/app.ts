import 'reflect-metadata';
import './config/env';
import 'express-async-errors';
import express, { Request, Response, NextFunction } from 'express';
import './database/connect';
import routes from './routes';
import AppError from './errors/AppError';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log('🚀🚀 Server Started');
});

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({ status: 'error', message: err.message });
  }
  return response.status(500).json({ status: 'error', message: 'Internal server error' });
});

export default { app };
