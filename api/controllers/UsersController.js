/**
 * UsersController
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

  profile: function (req, res) {
    var user_id = req.user.id;

    Scores
    .find()
    .where({ user_id: user_id })
    .sort('level_id ASC')
    .exec(function (err, scores) {
      if (scores === undefined) return res.notFound();
      if (err) return res.negotiate(err);

      res.view('profile', {
        'scores': scores
      });
    });
  },

};
