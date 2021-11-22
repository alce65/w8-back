import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
// import beerRoutes from './routes/beer.routes.js';
// import typeBeerRoutes from './routes/type.beer.routes.js';
import { router as beerRoutes } from './routes/beer.routes.js';
import { router as typeBeerRoutes } from './routes/type.beer.routes.js';
import { mongoConnect } from './config/db.js';

dotenv.config();
mongoConnect();

export const app = express();
const port = process.env.PORT || 3030;

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use((req, res, next) => {
  console.log('Middleware');
  next();
});

app.use(express.static(`public`));

app.use('/beers', beerRoutes);
app.use('/type_beers', typeBeerRoutes);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ error: err });
});

export const server = app.listen(port, () => {
  console.log(`Listen in http://localhost:${port}`);
});
