const dotenv = require('dotenv');
dotenv.config();

const APP_CONFIG = {
  port: process.env.APP_PORT || 3000,
};

module.exports = APP_CONFIG;
