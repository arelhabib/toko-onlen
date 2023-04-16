const bcrypt = require("bcrypt");
const saltRounds = process.env.SALT_ROUND || 3;

const encryptPass = async (pwd) => {
  const result = await bcrypt.hash(String(pwd), +saltRounds);
  return result;
};

const decryptPass = async (pwd, hash) => {
  // console.log(pwd, hash);
  const result = await bcrypt.compare(String(pwd), hash);
  return result;
};

module.exports = { encryptPass, decryptPass };
