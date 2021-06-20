require('dotenv').config();

const config = {
  PORT: process.env.PORT,
  DB_URI: process.env.DB_URI,
  SALT_ROUNT: process.env.SALT_ROUNT,
  SECRET: process.env.SECRET,
  COOKIE_NAME: process.env.COOKIE_NAME
}

module.exports = config;
