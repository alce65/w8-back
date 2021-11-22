import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
dotenv.config();

export const app = express();
const port = process.env.PORT || 3030;

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use(express.static(`public`));

export const server = app.listen(port, () => {
  console.log(`Listen in http://localhost:${port}`);
});
