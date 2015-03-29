/**
 * ScoresController
 *
 * @description :: Server-side logic for managing Scores
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  leaderboards: function (req, res) {
    Scores
    .find()
    .sort( 'score DESC' )
    .exec(function (err, scores) {
      if (scores === undefined) return res.notFound();
      if (err) return res.negotiate(err);

      User
      .find()
      .sort('id ASC')
      .exec(function (err, users) {
        if (users === undefined) return res.notFound();
        if (err) return res.negotiate(err);

        res.view('leaderboards', {
          'scores': scores,
          'users' : users
        });
      });
    });
  },
};
