const defaultData = [
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

const swaggerDocument = {
    swagger: "2.0",
    info: {
        title: "BMI Calculator",
        description: "calculate BMI",
        version: "1.0.0"
    },
    paths: {
        "/calc": {
            post: {
                summary: "get the BMI details calculated",
                description: "",
                parameters: [
                    {
                        in: "body",
                        name: "userData",
                        required: true,
                        schema: {
                            description: "user details",
                            default: defaultData
                        }
                    }
                ],
                responses: {
                    "200": {
                        description: "",
                        schema: {
                            type: "object"
                        }
                    }
                }
            }
        }
    }
};

export { swaggerDocument };