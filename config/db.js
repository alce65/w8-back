import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

export async function mongoConnect() {
  const user = process.env.DB_USER;
  const passwd = process.env.DB_PASSWD;
  let databaseName;

  if (process.env.NODE_ENV === 'prod') {
    databaseName = process.env.DB_NAME_PROD;
  } else if (process.env.NODE_ENV === 'test') {
    databaseName = process.env.DB_NAME_TEST;
  } else {
    // NODE_ENV === dev ....
    databaseName = process.env.DB_NAME;
  }

  try {
    const uri = `mongodb+srv://${user}:${passwd}@cluster0.dj9ya.mongodb.net/${databaseName}?retryWrites=true&w=majority`;
    return await mongoose.connect(uri);
  } catch (err) {
    console.log('__Error__', err);
  }
}
