import { Router } from 'express';

import env from '../../env';
import store from '../store';
import * as igApi from '../apis/instagram';

const router = Router();

router.get('/ig-redirect', (req, res, next) => {
  const { code } = req.query;
  igApi.getAccessToken(code)
    .then(({accessToken, user}) => {
      if (env.igValidUserId === user.id) {
        store.set({igAccessToken: accessToken}, (error) => {
          if (error) return next(error);
          req.session.igUser = user;
          res.redirect('/admin');
        });
      } else {
        console.warn(`login attempt by ${user.username}`);
        res.status(403).send(`Your kind ain't welcome round here, ${user.fullName}.`)
      }
    })
    .catch(error => next(error));
});

export default router;
