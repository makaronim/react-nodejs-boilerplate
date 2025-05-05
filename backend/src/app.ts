import express from 'express';
import {errorHandler} from './middlewares/errorHandler';
import exampleRoute from "./routes/exampleRoute";
import config from "./config/config";

const app = express();

app.use(express.json());

// Routes
// app.use('/api/items', itemRoutes);

// Global error handler (should be after routes)
app.use(errorHandler);
app.use(config.prefix, exampleRoute);

export default app;
