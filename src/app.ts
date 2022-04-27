import express from "express";
import { middlewares, handleError } from "./middlewares";
import { serveSwagger, setupSwagger } from "./middlewares/swagger";
import { bmiRouter } from "./routers/bmi.router";

const app = express();

app.use(middlewares);
app.use("/api-docs", serveSwagger, setupSwagger);
app.use(bmiRouter);

app.use(handleError);
export { app };