export function handleNotFound(req, res, next) {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
};

export function handleError(error, req, res, next) {
  console.error(error.stack);
  const status = error.status || 500;
  res.status(status).render('error', {error});
};
