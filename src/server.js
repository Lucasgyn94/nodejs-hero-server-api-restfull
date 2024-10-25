import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import swaggerSpecs from './swagger.js';
import heroiRoutes from './routes/heroiRoutes.js';
import { errorHandler } from './middlewares/errorHandler.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));


app.use('/api', heroiRoutes);

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
