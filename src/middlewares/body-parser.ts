import { json, urlencoded } from "express";

const jsonOptions = {}

const jsonParser = json(jsonOptions);

const urlencodedOptions = { extended: true };

const urlencodedParser = urlencoded(urlencodedOptions);

export { jsonParser, urlencodedParser };