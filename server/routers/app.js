import { Router } from 'express';

import env from '../../env';
import * as fbApi from '../apis/facebook';

const router = Router();

router.get('/', (req, res) => {
  const { isAdmin } = req.session;
  res.render('pages/home', {isAdmin});
});

router.get('/login', (req, res) => {
  const oauthUrl = 'https://www.facebook.com/v2.8/dialog/oauth'
    + '?response_type=code'
    + '&scope=email'
    + `&client_id=${env.fbAppId}`
    + `&redirect_uri=${env.fbRedirectUri}`;

  res.redirect(oauthUrl);
});

router.get('/fb-oauth-redirect', (req, res, next) => {
  const { code } = req.query;
  fbApi.getAccessToken(code)
    .then(fbApi.getUserId)
    .then(fbUserId => {
      if (env.fbAuthUserId === fbUserId) req.session.isAdmin = true;
      res.redirect('/');
    })
    .catch(error => next(error));
});

export default router;

