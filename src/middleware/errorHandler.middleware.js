import { CustomError } from "../utils/customError.util.js";

export const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({
      statusCode: err.statusCode,
      message: err.message,
    });
  }
  return res.status(500).json({
    statusCode: 500,
    message: "Internal Server Error",
  });
};
