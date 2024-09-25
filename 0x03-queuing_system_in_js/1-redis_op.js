import redis from 'redis';



const client = redis.createClient();

client.on('error', err => console.log(`Redis client not connected to the server:`, err.toString()))
  .on('connect', () => console.log('Redis Client Connected'));


const setNewSchool = (schoolName, value) => {
  client.set(schoolName, value, redis.print);
}

const displaySchoolValue = (schoolName) => {
  client.get(schoolName, (_, reply) => console.log(reply));
}

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');

client.quit();
