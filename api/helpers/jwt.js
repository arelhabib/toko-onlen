const jwt = require("jsonwebtoken");
const secret = process.env.SECRET_CODE || "ssshhh";

//return promise

const tokenGenerate = (data) => {
  const { username, email, roleId } = data;

  return new Promise((resolve, reject) => {
    jwt.sign(
      { username, email, roleId },
      secret,
      {
        expiresIn: "3h",
      },
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      }
    );
  });
};

const tokenVerify = (data) => {
  return new Promise((resolve, reject) => {
    jwt.verify(data, secret, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

module.exports = { tokenGenerate, tokenVerify };
