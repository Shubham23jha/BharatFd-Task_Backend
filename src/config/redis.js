import { createClient } from "redis";

const connectRedis = async () => {
  try {
    const redisClient = createClient({
      url: process.env.REDIS_URI,  // Example: "redis://localhost:6379"
    });

    await redisClient.connect();  // Use await to connect to Redis

    console.log("Redis connected successfully!");

    return redisClient;  // Return the client instance
  } catch (error) {
    console.error("Redis connection failed:", error);
    process.exit(1);  // Exit process with failure code
  }
};

export default connectRedis;
