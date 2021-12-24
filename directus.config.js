// Heroku to Directus mappings
require('dotenv').config({path: 'path_to_env_file'});

module.exports = {
  client: 'pg',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  },
  DB_CONNECTION_STRING:
    (process.env.DATABASE_CONNECTION_POOL_URL || process.env.DATABASE_URL) +
    '?sslmode=no-verify',
  RATE_LIMITER_REDIS: process.env.RATE_LIMITER_REDIS || process.env.REDIS_URL,
  CACHE_REDIS: process.env.CACHE_REDIS || process.env.REDIS_URL,
  EMAIL_FROM: process.env.EMAIL_FROM || process.env.MAILGUN_SMTP_LOGIN,
  EMAIL_SMTP_HOST:
    process.env.EMAIL_SMTP_HOST || process.env.MAILGUN_SMTP_SERVER,
  EMAIL_SMTP_PORT: process.env.EMAIL_SMTP_PORT || process.env.MAILGUN_SMTP_PORT,
  EMAIL_SMTP_USER:
    process.env.EMAIL_SMTP_USER || process.env.MAILGUN_SMTP_LOGIN,
  EMAIL_SMTP_PASSWORD:
    process.env.EMAIL_SMTP_PASSWORD || process.env.MAILGUN_SMTP_PASSWORD,
};
