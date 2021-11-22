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

  test('Then should exist DB for production ', async () => {
    process.env.NODE_ENV = 'prod';
    const connect = await mongoConnect();
    expect(connect.connections[0].name).toBe(process.env.DB_NAME_PROD);
    mongoose.disconnect();
  });

  test('Then should exist DB for development', async () => {
    process.env.NODE_ENV = 'dev';
    const connect = await mongoConnect();
    expect(connect.connections[0].name).toBe(process.env.DB_NAME);
    mongoose.disconnect();
  });

  test('with bad autentication should tigger an error ', async () => {
    process.env.DB_USER = 'Pepe';
    const connect = await mongoConnect();
    expect(connect).toBe(undefined);
    // await expect(mongoConnect).rejects.toThrow('MongoServerError');
    // expect(async () => {
    //   await mongoConnect();
    // }).toThrow('MongoServerError');
  });
});
