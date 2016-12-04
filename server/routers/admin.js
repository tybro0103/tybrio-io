import { Router } from 'express';

import store from '../store';
import * as igApi from '../apis/instagram';
import { requireAdmin } from '../middlewares/auth';

const router = Router();

router.use(requireAdmin);

router.get('/', (req, res) => {
  res.render('pages/admin/index');
});

router.get('/store', (req, res, next) => {
  res.send(store.get());
});

router.get('/store-load', (req, res, next) => {
  store.load((error) => {
    if (error) return next(error);
    res.send(store.get());
  });
});

router.get('/store-set', (req, res, next) => {
  store.set(req.query, (error) => {
    if (error) return next(error);
    res.send(store.get());
  });
});

router.get('/ig-fetch', (req, res, next) => {
  igApi.fetchRecentMedia()
    .then(items => {
      res.send(items);
    })
    .catch(error => next(error));
});

export default router;
