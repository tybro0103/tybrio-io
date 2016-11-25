// load ENV vars from .env
require('dotenv').config();

module.exports = {

  nodeEnv: process.env.NODE_ENV,

  port: process.env.PORT,
  host: process.env.HOST,

  cookieSessionSecret: process.env.COOKIE_SESSION_SECRET,

  awsAccessKeyId: process.env.AWS_ACCESS_KEY_ID,
  awsSecretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  awsRegion: process.env.AWS_REGION,
  awsBucketName: process.env.AWS_BUCKET_NAME,

  igClientId: process.env.IG_CLIENT_ID,
  igClientSecret: process.env.IG_CLIENT_SECRET,
  igValidUsername: process.env.IG_VALID_USERNAME,

};
