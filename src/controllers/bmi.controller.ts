import { RequestHandler } from "express";
import { bmiSummary, IUserDetails, IBMISummary } from "../models/bmi.model";

// /calc post request handler
const calcBMI: RequestHandler = (req, res, next) => {

    const userData: IUserDetails[] = req.body;
    const dataError = new Error("invalid data received");

    // throws error if the data received is not of type Array
    if (!Array.isArray(userData)) return next(dataError);

    // Array of the resulting bmiSummary objects
    const result: IBMISummary[] = [];
    userData.forEach((userDetails) => result.push(bmiSummary(userDetails)));
    
    return res.json(result);
};

export { calcBMI };