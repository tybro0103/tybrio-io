import env from '../../env';

export function requireAdmin(req, res, next) {
  const { igUser } = req.session;
  if (igUser && igUser.id === env.igValidUserId) return next();
  //
  const error = new Error('admin rights required');
  error.status = 401;
  next(error);
};
