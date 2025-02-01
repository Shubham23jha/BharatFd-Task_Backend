import express from "express";

const app = express();

app.use(express.json()); // Parse JSON requests

export { app };
