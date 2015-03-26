/**
 * AchievementsController
 *
 * @description :: Server-side logic for managing Achievements
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  unlock: function (req, res) {
    var username = req.user.username,
        achievement = req.params.id;

    if (username && achievement) {
      User
      .findOne()
      .where({ username: username })
      .exec(function (err, user) {
        if (user === undefined) return res.notFound();
        if (err) return res.negotiate(err);

        for (var i = 0; i < user.achievements.length; i++) {
          if (user.achievements[i].achievement_id = achievement) {
            res.status(200).end();
          }
        }

        user.achievements.push({ achievement_id: achievement, unlocked: new Date() });

        user.save(function (err) {
          if (err) {
            res.status(500).end();
          } else {
            res.status(200).end();
          }
        });
      });
    } else {
      res.status(500).end();
    }
  },

};
