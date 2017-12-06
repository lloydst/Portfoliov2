function loggedOut(req, res, next) {
  if (req.session && req.session.userId) {
    return res.redirect('/');
  }
  return next();
}
function requiresLogin(req, res, next) {
  if (req.session && req.session.userId) {
    return next();
  } else {
    var err = new Error('You must be logged in to view this page.');
    err.status = 401;
    next(err)
    //return next(err)
    res.redirect('/login')
  }

}
function isLoggedIn(req, res, next) {
  if (req.session && req.session.userId) {
    return next();
  }
 res.redirect('/login');
}
module.exports.loggedOut = loggedOut;
module.exports.requiresLogin = requiresLogin;
module.exports.isLoggedIn = isLoggedIn;
