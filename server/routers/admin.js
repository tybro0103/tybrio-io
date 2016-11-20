import { Router } from 'express';

import store from '../store';
import { requireAdmin } from '../middlewares/auth';

const router = Router();

router.use(requireAdmin);

router.get('/store-set', (req, res, next) => {
  store.set(req.query, (error) => {
    if (error) return next(error);
    res.send(store.get());
  });
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

export default router;
