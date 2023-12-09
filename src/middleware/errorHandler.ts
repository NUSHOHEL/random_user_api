import { ErrorRequestHandler } from "express";

const resHandler = (msg: string, details: string) => ({
  success: false,
  message: msg,
  error: {
    code: 404,
    description: details,
  },
});
export const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
  switch (error.name) {
    case "ZodError":
      {
        const errorMessgae = JSON.parse(error.message);
        const detailsMessage = errorMessgae.map(
          (err: Record<string, string>) => {
            return `${err.path} is ${err.message}`;
          }
        );
        res.status(404).json(resHandler(error.name, detailsMessage));
      }
      break;
    case "CastError":
      {
        const { kind, value, path } = error.reason;
        const message =
          path +
          " " +
          "required to be" +
          " " +
          kind +
          " " +
          "got" +
          " " +
          value;
        res.json(resHandler(error.name, message));
      }
      break;
    case "MongoServerError":
      {
        const [key, value] = Object.entries(error.keyValue)[0];
        const message =
          error.code === 11000
            ? `${key}:${value} Already exist in Database`
            : error.message;
        res.json(resHandler(error.name, message));
      }
      break;
    case "ValidationError":
      {
        const message =
          error.errors[Object.keys(error.errors)[0]].properties.message;
        res.json(resHandler(error.name, message));
      }
      break;
    default:
      res.status(404).json(resHandler(error.message, error.message));
  }

};
