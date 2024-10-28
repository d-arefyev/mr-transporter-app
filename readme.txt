Create project:
npx create-next-app@latest

npm run dev

npm install mongodb
global.d.ts
declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}
export {};
