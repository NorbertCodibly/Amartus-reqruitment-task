const { env } = process;

const APP_CONFIG = {
  port: env.APP_PORT || 3000,
};

module.exports = APP_CONFIG;
