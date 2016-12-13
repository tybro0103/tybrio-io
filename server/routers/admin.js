import { Router } from 'express';

import store from '../store';
import { requireAdmin } from '../middlewares/auth';
import { updateIgItems } from '../tasks/update-ig-items';

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
  updateIgItems((error, fetchedItems) => {
    if (error) return next(error);
    res.send(fetchedItems);
  });
});

export default router;
