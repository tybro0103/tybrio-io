export function requireAdmin(req, res, next) {
  const { isAdmin } = req.session;
  if (isAdmin) next();
  //
  let error = new Error('admin rights required');
  error.status = 401;
  next(error);
};
