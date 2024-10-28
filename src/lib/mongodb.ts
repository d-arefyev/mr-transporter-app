// lib/mongodb.ts
import { MongoClient } from 'mongodb';

const uri = process.env.MONGO_DB_URI as string;
let client;
let clientPromise: Promise<MongoClient>;

if (!uri) {
  throw new Error('Пожалуйста, добавьте вашу Mongo URI в .env.local');
}

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export default clientPromise;
