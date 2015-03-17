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
    .exec(function (err, scores) {
      if (scores === undefined) return res.notFound();
      if (err) return res.negotiate(err);

      res.view('leaderboards', {
        'scores': scores
      });
    });
  },
};

