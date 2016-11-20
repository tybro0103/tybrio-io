// load ENV vars from .env
require('dotenv').config();

module.exports = {

  nodeEnv: process.env.NODE_ENV,

  port: process.env.PORT,

  cookieSessionSecret: process.env.COOKIE_SESSION_SECRET,

  awsAccessKeyId: process.env.AWS_ACCESS_KEY_ID,
  awsSecretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  awsRegion: process.env.AWS_REGION,
  awsBucketName: process.env.AWS_BUCKET_NAME,

  fbAppId: process.env.FB_APP_ID,
  fbAppSecret: process.env.FB_APP_SECRET,
  fbRedirectUri: process.env.FB_REDIRECT_URI,
  fbAuthUserId: process.env.FB_AUTH_USER_ID,

};