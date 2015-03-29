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
    .sort( 'user ASC' )
    .exec(function (err, scores) {
      if (scores === undefined) return res.notFound();
      if (err) return res.negotiate(err);

      User
      .find()
      .sort('id ASC')
      .exec(function (err, user) {
        if (user === undefined) return res.notFound();
        if (err) return res.negotiate(err);

        res.view('leaderboards', {
          'scores': scores,
          'user' : user
        });
      });
    });
  },
};
