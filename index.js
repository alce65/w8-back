import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
// import beerRoutes from './routes/beer.routes.js';
// import typeBeerRoutes from './routes/type.beer.routes.js';
import { router as beerRoutes } from './routes/beer.routes.js';
import { router as typeBeerRoutes } from './routes/type.beer.routes.js';

dotenv.config();

export const app = express();
const port = process.env.PORT || 3030;

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use(express.static(`public`));

app.use('/beers', beerRoutes);
app.use('/type_beers', typeBeerRoutes);

export const server = app.listen(port, () => {
  console.log(`Listen in http://localhost:${port}`);
});
