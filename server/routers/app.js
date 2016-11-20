import { Router } from 'express';

import env from '../../env';
import * as fbApi from '../apis/facebook';

const router = Router();

router.get('/', (req, res) => {
  res.render('pages/home');
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
      res.redirect(`/?fbUserId=${fbUserId}`);
    })
    .catch(error => {
      console.log(error);
      next(error);
    });
});

export default router;

