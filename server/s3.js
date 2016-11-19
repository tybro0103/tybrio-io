import AWS from 'aws-sdk';

import env from '../env';

const config = new AWS.Config({
  accessKeyId: env.awsAccessKeyId,
  secretAccessKey: env.awsSecretAccessKey,
  region: env.awsRegion,
});

const s3 = new AWS.S3(config);

export default s3;
