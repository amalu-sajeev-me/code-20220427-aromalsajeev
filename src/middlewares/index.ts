import * as bodyParser from "./body-parser";

const middlewares = [
    ...Object.values(bodyParser),
];

export { middlewares };