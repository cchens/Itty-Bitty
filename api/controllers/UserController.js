/**
 * UsersController
 *
 * Server-side logic for managing users
 */

module.exports = {

  profile: function (req, res) {
    var user_id = req.user.id;

    if (user_id) {
      Scores
      .find()
      .where({ user: user_id })
      .sort('question_id ASC')
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
    } else {
      return res.notFound();
    }
  },

  completeLevel: function (req, res) {
    var username = req.user.username,
        level = parseInt(req.params.id, 10),
        score = parseInt(req.params.score, 10);

    if (username && level) {
      User
      .findOne()
      .where({ username: username })
      .exec(function (err, user) {
        if (user === undefined) return res.notFound();
        if (err) return res.negotiate(err);

        // Record level
        user.status.push(level);

        user.save(function (err) {
          if (err) {
            res.status(500).end();
          } else {
            // Record score
            Scores.create({
              user: user.id,
              level: level,
              score: score
            }, function (err, score) {
              if (err) res.status(500).end();

              res.status(200).end();
            });
          }
        });
      });
    } else {
      res.status(500).end();
    }
  },

};

