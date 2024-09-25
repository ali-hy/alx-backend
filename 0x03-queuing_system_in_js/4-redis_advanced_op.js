import redis from 'redis';

const client = redis.createClient();

const hash_key = 'HolbertonSchools';
const hash_structure = {
  'Portland': 50,
  'Seattle': 80,
  'New York': 20,
  'Bogota': 20,
  'Cali': 40,
  'Paris': 2
}

Object.entries(hash_structure).forEach(([field, value]) => {
  client.hset(hash_key, field, value, redis.print)
})

client.hgetall(hash_key, (_, rep) => console.log(rep))
