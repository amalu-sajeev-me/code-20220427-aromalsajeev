import { Router } from "express";
import { calcBMI } from "../controllers/bmi.controller";

const bmiRouter = Router();

bmiRouter.post("/calc", calcBMI);


export { bmiRouter };