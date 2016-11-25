import querystring from 'querystring';
import camelize from 'camelize';

import env from '../../env';
import igClient from '../clients/instagram';

export function getAccessToken(code) {
  const params = {
    client_id: env.igClientId,
    client_secret: env.igClientSecret,
    grant_type: 'authorization_code',
    redirect_uri: `${env.host}/oauth/ig-redirect`,
    code,
  };
  const body = querystring.stringify(params);

  return igClient.post('/oauth/access_token', body)
    .then(res => camelize(res.data));
};
