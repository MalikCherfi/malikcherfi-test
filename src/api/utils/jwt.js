import jwt from "jsonwebtoken";
import createError from "http-errors";
import dotenv from "dotenv";
dotenv.config();

const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;

export default {
  signAccessToken(payload) {
    return new Promise((resolve, reject) => {
      jwt.sign({ payload }, accessTokenSecret, {}, (err, token) => {
        if (err) {
          reject(createError.InternalServerError());
        }
        resolve(token);
      });
    });
  },
  verifyAccessToken(token) {
    return new Promise((resolve, reject) => {
      jwt.verify(token.split(" ")[1], accessTokenSecret, (err, payload) => {
        if (err) {
          const message =
            err.name == "JsonWebTokenError" ? "Unauthorized" : err.message;
          return reject(createError.Unauthorized(message));
        }
        resolve(payload);
      });
    });
  },
};
