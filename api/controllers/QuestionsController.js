/**
 * QuestionController
 *
 * Description
 */

module.exports = {

  index: function (req, res) {
    var type      = req.params.type,
        level_num = req.params.level_num;

    // Get appropriate level content from db
    // e.g. http://localhost:1337/tutorials/bitwise/1
    if (type && level_num) {
      // Checks for the tutoral content by checking type and level_num
      Levels
      .findOne()
      .where({ type: type, level_num: level_num })
      .exec(function (err, level) {
        if (level === undefined) return res.notFound();
        if (err) return res.negotiate(err);

        // Checks for the question data for this level
        Questions
        .find()
        .where({ level_id: level.level_id })
        .exec(function (err, questions) {
          if (questions === undefined) return res.notFound();
          if (err) return res.negotiate(err);

          var title = "Level " + level_num + " (" + type + ")";

          res.view('quiz', {
            'title': title,
            'tutorial': level,
            'type': type,
            'questions': questions
          });
        });
      });
    } else {
      res.notFound();
    }
  },

  validateAnswer: function (req, res) {
    var user_sol = req.param("user_solution"),
        questionID = req.param("questionID");
        //questionID = "1";
    sails.log.info(user_sol)
    sails.log.info(questionID)

    if(user_sol && questionID){

      Questions
      .find()
      .where({ question_id:questionID })
      .exec(function (err, questions) {
        if (questions === undefined) return res.notFound();
        if (err) return res.negotiate(err);
        /*
        sails.log.info(questions.answer)
        sails.log.info(user_sol)
        sails.log.info(questions)
        */
        sails.log.info(questions[0].answer)
        
        if(questions[0].answer === user_sol){
          sails.log.info("true!!!!!!")
          res.send('true');
        }
        else{
          sails.log.info("false!!!!!!")

          res.send('false');
        }

      });
    }
  }


};




