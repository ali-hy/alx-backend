import redis from 'redis';
import { promisify } from 'util';


async function app() {
  const client = redis.createClient();

  client.on('error', err => console.log(`Redis client not connected to the server:`, err.toString()))
    .on('connect', () => console.log('Redis Client Connected'));

  const setNewSchool = (schoolName, value) => {
    client.set(schoolName, value, redis.print);
  }

  const getAsync = promisify(client.get).bind(client);

  const displaySchoolValue = async (schoolName) => {
    try {
      const reply = await getAsync(schoolName);
      console.log(reply);
    } catch (err) {
      console.error(err);
    }
  }

  await displaySchoolValue('Holberton');
  setNewSchool('HolbertonSanFrancisco', '100');
  displaySchoolValue('HolbertonSanFrancisco');

  client.quit();
}

app();
