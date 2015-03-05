/**
 * QuizController
 *
 * Description
 */

module.exports = {

  index: function (req, res) {
    var type  = req.params.type,
        level = req.params.level;

    // get appropriate level content from db
    // e.g. http://localhost:1337/quiz/1
    if (level) {
      // checks for the tutoral content by checking level id
      // this will need to be changed so checks for types too
      Levels
      .find({ level_id: level })
      .exec(function (err, levels) {
        if (levels === undefined) return res.notFound();
        if (err) return res.negotiate(err);

        // Checks for the question data by level
        Questions
        .find({ level_id: level })
        .exec(function (err, questions) {
          if (questions === undefined) return res.notFound();
          if (err) return res.negotiate(err);

          res.view('quiz', {
            'type': type,
            'level': level,
            'tutorial':levels,
            'questions': questions
          });
        });
      });
    }
  }

};
