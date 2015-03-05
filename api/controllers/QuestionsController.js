/**
 * QuizController
 *
 * Description
 */

module.exports = {

  index: function (req, res) {
    var type      = req.params.type,
        level_num = req.params.level;

    // get appropriate level content from db
    // e.g. http://localhost:1337/tutorials/bitwise/1
    if (level_num && type) {
      // checks for the tutoral content by checking level id
      // this will need to be changed so checks for types too
      Levels
      .findOne({ type: type, level_num: level_num })
      .exec(function (err, level) {
        if (level === undefined) return res.notFound();
        if (err) return res.negotiate(err);

        // Checks for the question data by level
        Questions
        .find({ level_id: level.level_id })
        .exec(function (err, questions) {
          if (questions === undefined) return res.notFound();
          if (err) return res.negotiate(err);

          var title = "Level " + level_num + " (" + type + ")";

          res.view('quiz', {
            'title': title,
            'tutorial': level,
            'questions': questions
          });
        });
      });
    } else {
      res.redirect('/');
    }
  }

};
