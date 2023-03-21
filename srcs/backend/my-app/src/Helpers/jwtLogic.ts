const error = require("http-errors");
const jwt = require("jsonwebtoken");

function signToken(payload: any) {
  return new Promise((resolve, reject) => {
    jwt.sign(
      { payload },
      process.env.ACCESS_TOKEN_SECRET,
      {},
      (err: any, token: any) => {
        if (err) {
          reject(error.InternalServerError());
        }
        resolve(token);
      }
    );
  });
}

function verifyToken(token: any) {
  return new Promise((resolve, reject) => {
    jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET,
      (err: any, payload: any) => {
        if (err) {
          const message =
            err.name == "JsonWebTokenError" ? "Not authorized" : err.message;
          return reject(error.Unauthorized(message));
        }
        resolve(payload);
      }
    );
  });
}

export { signToken, verifyToken };
