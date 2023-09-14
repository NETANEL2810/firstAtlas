// secret data - sensative data
require("dotenv").config();///connect to .env
exports.config = {
  tokenSecret:process.env.TOKEN_SECRETE,
  userDb:process.env.USER_DB,
  passDb:process.env.PASS_DB
}

// exports.config = {
//   tokenSecret:"monkeysTokenSecret",
//   userDb:"koko77",
//   passDb:"NATI12"

// }

