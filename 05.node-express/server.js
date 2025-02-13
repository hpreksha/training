import express from 'express';
import basicApiRoute from './routes/00.basicApiRoute.js';
import fileRoutes from './routes/01.fileRoutes.js';
import cryptoRoutes from './routes/02.cryptoRoutes.js';
import systemRoutes from './routes/03.systemRoutes.js';

const app = express();
const port = 3000;
app.use(express.json());

app.use('/api', systemRoutes);
app.use('/api/basic', basicApiRoute);
app.use('/api/files', fileRoutes);
app.use('/api/crypto', cryptoRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});