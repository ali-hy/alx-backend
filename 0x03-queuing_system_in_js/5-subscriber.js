import redis from 'redis';

const client = redis.createClient();

client.on('error', err => console.log(`Redis client not connected to the server:`, err.toString()))
  .on('connect', () => console.log('Redis Client Connected'));

client.subscribe('holberton school channel');
client.on('message', function (channel, message) {
  console.log(message);

  if (message === 'KILL_SERVER') {
    client.unsubscribe();
    client.quit();
  }
})
