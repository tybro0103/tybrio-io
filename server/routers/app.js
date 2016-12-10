import { Router } from 'express';

import env from '../../env';
import store from '../store';

const router = Router();

router.get('/', (req, res) => {
  const { isAdmin } = req.session;
  const igItems = store.get('igItems');
  res.render('pages/home', {isAdmin, igItems});
});

router.get('/login', (req, res) => {
  const oauthUrl = 'https://api.instagram.com/oauth/authorize/'
    + '?response_type=code'
    + `&client_id=${env.igClientId}`
    + `&redirect_uri=${env.host}/oauth/ig-redirect`;

  res.redirect(oauthUrl);
});

router.get('/logout', (req, res) => {
  req.session = null;
  res.redirect('/');
});

export default router;

