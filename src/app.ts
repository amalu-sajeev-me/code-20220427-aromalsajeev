import express from "express";
import { middlewares, handleError } from "./middlewares";
import { serveSwagger, setupSwagger } from "./middlewares/swagger";
import { bmiRouter } from "./routers/bmi.router";

const app = express();

// inserts all middlewares as an array
app.use(middlewares);

// API Documentation route serving
app.use("/api-docs", serveSwagger, setupSwagger);

// Router accepting request to calculate the BMI
app.use(bmiRouter);

// Default Error Handler
app.use(handleError);
export { app };