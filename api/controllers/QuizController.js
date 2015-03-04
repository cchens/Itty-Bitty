/**
 * QuizController
 *
 * Description
 */

 module.exports = {

  index: function (req,res) {
    var type  = req.params.type,
        level = req.params.level;

    // TODO: get appropriate level content from db

    return res.view('quiz', {
      'type': type,
      'level': level
    });
  }

}
