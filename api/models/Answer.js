var Answer = {

  attributes: {
    question_id: {
      type: 'integer',
      autoIncrement: true,
      primaryKey: true
    },

    level_id: {
      model: 'Levels'
    },

    mcAnswer: {
      type: 'string',
      defaultTo: null
    },

    strAnswer: {
      type: 'string',
      notNull: true
    }
  },

  validateAnswer: function (answer, next) {

    if (answer.mcAnswer) {
      Questions
      .find()
      .where({ question_id: answer.question_id })
      .exec(function (err, questions) {
        if (questions === undefined) return res.notFound();
        if (err) return res.negotiate(err);

        return answer === questions.answer;
      }

    }
    else if (answer.strAnswer) {

    }
  }
};

module.exports = Answer;
