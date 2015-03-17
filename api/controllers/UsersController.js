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

  profile: function (req, res) {
    return res.view('profile');
  },

};
