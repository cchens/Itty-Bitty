/**
 * QuizController
 *
 * Description
 */

module.exports = {

  index: function (req,res) {
    var type  = req.params.type,
        level = req.params.level;

    // get appropriate level content from db
    // currently it is only based on level of question
    // e.g. http://localhost:1337/quiz/1

    if (level) {
      Questions
      .find({ level_id: level })
      .exec(function (err, questions) {
        if (questions === undefined) return res.notFound();
        if (err) return res.negotiate(err);

        res.view('quiz', {
          'type': type,
          'level': level,
          'questions': questions
        });
      });
    }
  }

}
