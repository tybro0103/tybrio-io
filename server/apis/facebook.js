import env from '../../env';
import fbClient from '../clients/facebook';

export function getAccessToken(code) {
  const params = {
    client_id: env.fbAppId,
    redirect_uri: env.fbRedirectUri,
    client_secret: env.fbAppSecret,
    code,
  };

  return fbClient.get('/oauth/access_token', {params})
    .then(({data}) => data.access_token);
};

export function getUserId(accessToken) {
  const params = {access_token: accessToken};

  return fbClient.get('/me', {params})
    .then(({data}) => data.id);
}
