/**
 * UsersController
 *
 * Server-side logic for managing users
 */

module.exports = {

  // index: function (req, res) {
  //   return res.view('user');
  // },

  /**
   * CommentController.create()
   */
  create: function (req, res) {
    return res.json({
      todo: 'Not implemented yet!'
    });
  },

  /**
   * CommentController.destroy()
   */
  destroy: function (req, res) {
    return res.json({
      todo: 'Not implemented yet!'
    });
  },

  viewLogin: function(req, res) {
    if (!req.session.authenticated)
      return res.view('login');
    else
      return res.redirect('back');
  },

  login: function (req, res) {
    // TODO: proper login
    var username = req.param('username');
    var password = req.param('password');

    User.find({
      username: username
      // password: password.salt()
    }).done(function (err, users) {
      if (users.length === 1) {
        res.view('index', { message: 'Login success!' });
        req.session.authenticated = true;
      } else {
        res.view('login', { message: 'Login failed!' });
      }
    });
  },

  viewRegister: function(req, res) {
    if (!req.session.authenticated)
      return res.view('register');
    else
      return res.redirect('back');
  },

  register: function (req, res) {
    // TODO: proper registration
    return res.redirect("http://www.sayonara.com");
  }
};
