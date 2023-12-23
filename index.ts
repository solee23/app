import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';

import routes from './src/routes';

dotenv.config();

const app: Express = express();

const PORT = process.env.PORT || 6061;

app.use('/api', routes)

app.listen(PORT, () => {
    console.log(`[server]: Server is running at ${PORT}`);
})