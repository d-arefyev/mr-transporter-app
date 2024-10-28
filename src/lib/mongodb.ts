// src/lib/mongodb.ts
import { MongoClient } from 'mongodb';

const uri = process.env.MONGO_DB_URI; // Убедитесь, что это строка
let client: MongoClient | null = null; // Инициализация клиента как null

if (!uri) {
  throw new Error('Please add your Mongo URI to .env');
}

// Функция для получения клиента MongoDB
const getClient = async () => {
  if (!client) {
    client = new MongoClient(uri);
    await client.connect();
  }
  return client;
};

// Экспортируем функцию для получения клиента
export default getClient;
