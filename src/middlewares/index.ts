import * as bodyParser from "./body-parser";
export * from "./error-handler";

const middlewares = [
    ...Object.values(bodyParser),
];

export { middlewares };