import { RequestHandler } from "express";
import { bmiSummary, IUserDetails, IBMISummary } from "../models/bmi.model";

const calcBMI: RequestHandler = (req, res, next) => {

    const userData: IUserDetails[] = req.body;
    const dataError = new Error("invalid data received");
    if (!Array.isArray(userData)) return next(dataError);
    const result: IBMISummary[] = [];
    userData.forEach((userDetails) => result.push(bmiSummary(userDetails)));
    return res.json(result);
};

export { calcBMI };