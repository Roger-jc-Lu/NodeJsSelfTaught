module.exports = {
  checkLogin: function checkLogin (req, res, next) {
    if (!req.session.user) {
      req.flash('error', 'Please login')
      return res.redirect('/signin')
    }
    next()
  },

  checkNotLogin: function checkNotLogin (req, res, next) {
    if (req.session.user) {
      req.flash('error', 'Login already')
      return res.redirect("back")
    }
    next()
  }
}
