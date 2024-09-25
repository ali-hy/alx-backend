import { createClient, print } from 'redis';


const client = createClient();

client.on('error', err => console.log(`Redis client not connected to the server:`, err.toString()))
  .on('connect', () => console.log('Redis Client Connected'));

client.quit();
