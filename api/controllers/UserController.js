/**
 * UserController
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

  login: function (req, res) {
    var username = req.param('username');
    var password = req.param('password');

    User.find({
      username: username
      // password: password.salt()
    }).done(function (err, users) {
      if (users.length === 1) {
        res.view('index', { message: 'Login success!', loggedIn: true });
        req.session.authenticated = true;
      } else {
        res.view('login', { message: 'Login failed!', loggedIn: false });
      }
    });
  },

  register: function (req, res) {
    return res.redirect("http://www.sayonara.com");
  }
};
