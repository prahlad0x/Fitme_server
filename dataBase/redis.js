const redis = require("redis");
require("dotenv").config();

const redisClient = redis.createClient({
  password: 'QWZiOXzUlRuoFLDxS5LMg3MammfX1cNY',
    socket: {
        host: 'redis-10902.c89.us-east-1-3.ec2.cloud.redislabs.com',
        port: 10902
    }
});

redisClient.connect(); //temperory changes


redisClient.on("error", (error) => {
  console.log(error.message);
});
redisClient.on("connect", () => {
  console.log("Connected to the redis cloud");
});
module.exports = { redisClient };
