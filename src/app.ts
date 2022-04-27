import express from "express";
import { middlewares } from "./middlewares";

const app = express();

app.use(middlewares);

export { app };