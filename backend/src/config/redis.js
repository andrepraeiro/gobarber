export default {
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
};

// docker run --name redisbarber -p 6379:6379 -d -t redis:alpine
