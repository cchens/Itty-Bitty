/**
 * UserController
 *
 * Server-side logic for managing users
 */

module.exports = {

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

  hi: function (req, res) {
    return res.send("Hi there!");
  },

  bye: function (req, res) {
    return res.redirect("http://www.sayonara.com");
  }
};
