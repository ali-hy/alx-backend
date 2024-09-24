import { createClient, print } from 'redis';

const app = async () => {
  const client = createClient();

  await client.on('error', err => console.log(`Redis client not connected to the server:`, err.toString()))
    .on('connect', () => console.log('Redis Client Connected'));

  await client.quit();
}

app();
