import { RequestHandler } from "express";
import { bmiSummary, IUserDetails, IBMISummary } from "../models/bmi.model";

const calcBMI: RequestHandler = (req, res) => {
    const userData: IUserDetails[] = req.body;
    const result: IBMISummary[] = [];
    userData.forEach((userDetails) => result.push(bmiSummary(userDetails)));
    return res.json(result);
};

export { calcBMI };