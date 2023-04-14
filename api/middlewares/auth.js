const { tokenVerify } = require("../helpers/jwt");

const auth = async (req, res, next) => {
  const access_token = req.headers.access_token;

  if (!access_token) {
    return res
      .status(401)
      .json({ message: "access token not found, go login/authenticate first" });
  }

  try {
    req.authData = await tokenVerify(access_token);

    next();
  } catch (error) {
    res.status(403).json({ message: "verify auth failed", error });
  }
};

module.exports = auth;
