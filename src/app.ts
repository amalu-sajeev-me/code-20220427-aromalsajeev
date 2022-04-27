import express from "express";
import { middlewares } from "./middlewares";
import { bmiRouter } from "./routers/bmi.router";

const app = express();

app.use(middlewares);
app.use(bmiRouter);

export { app };