import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import { mongoConnect } from './db.js';

describe('Given a connection with MongoDB', () => {
  test('Then should exist our DB', async () => {
    const connect = await mongoConnect();
    expect(connect.connections[0].name).toBe(process.env.DB_NAME_TEST);
    mongoose.disconnect();
  });
});
