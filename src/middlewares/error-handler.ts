import { ErrorRequestHandler } from "express";

const handleError: ErrorRequestHandler = (err, req, res, next) => {
    if (err) res.send(err.message);
};

export { handleError };