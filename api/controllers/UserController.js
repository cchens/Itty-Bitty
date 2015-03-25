/**
 * UsersController
 *
 * Server-side logic for managing users
 */

module.exports = {

  profile: function (req, res) {
    var username = req.user.username;

    Scores
    .find()
    .where({ username: username })
    .sort('level_id ASC')
    .exec(function (err, scores) {
      if (scores === undefined) return res.notFound();
      if (err) return res.negotiate(err);

      Achievements
      .find()
      .sort('name ASC')
      .exec(function (err, achievements) {
        if (achievements === undefined) return res.notFound();
        if (err) return res.negotiate(err);

        res.view('profile', {
          'scores': scores,
          'achievements': achievements
        });
      });
    });
  },

};
