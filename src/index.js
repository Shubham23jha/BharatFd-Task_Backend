import dotenv from "dotenv";
import connectDB from "./config/db.js";
import { app } from "./app.js";
import connectRedis from "./config/redis.js";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    connectRedis()
      .then(() => {
        app.on("error", (err) => {
          console.log("Error connecting", err);
          throw err;
        });
        app.listen(process.env.PORT || 8000, () => {
          console.log(`Server is running at port: ${process.env.PORT}`);
        });
      })
      .catch((err) => {
        console.log("Redis connection failed", err);
      });
  })
  .catch((err) => {
    console.log("MongoDB connection failed", err);
  });
