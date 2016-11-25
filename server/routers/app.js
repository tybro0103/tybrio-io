import { Router } from 'express';

import env from '../../env';

const router = Router();

router.get('/', (req, res) => {
  const { isAdmin } = req.session;
  res.render('pages/home', {isAdmin});
});

router.get('/login', (req, res) => {
  const oauthUrl = 'https://api.instagram.com/oauth/authorize/'
    + '?response_type=code'
    + `&client_id=${env.igClientId}`
    + `&redirect_uri=${env.host}/oauth/ig-redirect`;

  res.redirect(oauthUrl);
});

export default router;

