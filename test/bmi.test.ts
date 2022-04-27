import request from "supertest";
import * as bmi from "../src/models/bmi.model";
import { app } from "../src/app";
import assert from "assert";

const data = [
    {
        "Gender": "Male",
        "HeightCm": 171,
        "WeightKg": 96
    },
    {
        "Gender": "Male",
        "HeightCm": 161,
        "WeightKg": 85
    },
    {
        "Gender": "Male",
        "HeightCm": 180,
        "WeightKg": 77
    },
    {
        "Gender": "Female",
        "HeightCm": 166,
        "WeightKg": 62
    },
    {
        "Gender": "Female",
        "HeightCm": 150,
        "WeightKg": 70
        
    },
    {
        "Gender": "Female",
        "HeightCm": 167,
        "WeightKg": 82
    }
];
describe("BMI Methods", () => {

    it("get BMI", () => {
        const userDetails = { Gender: 'Male', HeightCm: 171, WeightKg: 96 };
        const value = bmi.calculateBMI(userDetails)
        assert.equal(value, 56.14);
    });

    it("find BMI category an Health Risk", () => {
        const [category, healthRisk] = bmi.bmiCategoryAndRisk(56.14);
        assert.deepEqual(category, "Very severely obese");
        assert.deepEqual(healthRisk, "Very high risk");
    });
});

describe("send request to /calc API endpoint", () => {
    it("get bmi response", () => {
        request(app).post("/calc")
            .send(data)
            .then(res => {
            assert(typeof res, "string");
        });
    });
});
