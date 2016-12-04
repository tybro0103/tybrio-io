import querystring from 'querystring';
import camelize from 'camelize';

import env from '../../env';
import store from '../store';
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

export function fetchRecentMedia() {
  const params = {
    access_token: store.get('igAccessToken'),
    count: 20,
  };

  return igClient.get('/v1/users/self/media/recent', {params})
    .then(res => res.data.data)
    .then(camelize)
    .then(formatIgItems);
};

/*
 *  PRIVATE
 */

const formatIgItems = (items) => items.reduce((itemMap, item) => ({
  ...itemMap,
  [item.id]: {
    createdAt: item.createdTime,
    imageLow: item.images.lowResolution,
    imageStandard: item.images.standardResolution,
    imageThumb: item.images.thumbnail,
    link: item.link,
    type: item.type,
    likeCount: item.likes.count,
    caption: item.caption,
  }
}), {});
