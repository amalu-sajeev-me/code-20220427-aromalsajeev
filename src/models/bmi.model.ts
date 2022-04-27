type IUserDetails = {
    Gender: string,
    HeightCm: number,
    WeightKg: number
};
type IBMISummary = {
    bmi: number;
    category: string;
    healthRisk: string;
};

const calculateBMI = (details: IUserDetails) => {
    const { HeightCm, WeightKg: mass } = details;
    const height = HeightCm / 100;
    const bmi = +(mass / height).toFixed(2);
    return bmi;
};

const bmiCategoryAndRisk = (bmi: number) => {
    if (bmi >= 40) return [`Very severely obese`, `Very high risk`];
    if (bmi >= 35) return [`Severely obese`, `High`];
    if (bmi >= 30) return [`Moderately obese`, `Medium risk`];
    if (bmi >= 25) return [`Overweight`, `Enhanced risk`];
    if (bmi >= 20) return [`Normal weight`, `Low risk`];
    return [`Underweight`, `Malnutrition risk`];
};

const bmiSummary = (userDetails: IUserDetails) => {
    const bmi = calculateBMI(userDetails);
    const [category, healthRisk] = bmiCategoryAndRisk(bmi);
    const summary = { bmi, category, healthRisk };
    return summary;
}

export { calculateBMI, bmiCategoryAndRisk, bmiSummary };
export type { IUserDetails, IBMISummary };
