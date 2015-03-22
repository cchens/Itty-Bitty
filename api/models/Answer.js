
function checkSolution (passport, next) {
     todo: 'Not implemented yet!'
     
      // donno y this doesn't run
      if(answer.mcAnswer){
        /*
        // donno y this doesn't run

        Questions
            .find()
            .where({ question_id:answer.question_id })
            .exec(function (err, questions) {
              if (questions === undefined) return res.notFound();
              if (err) return res.negotiate(err); 
              if (answer == questions.answer) {
                return true;
              }
              else{
                return false;
              }
            }
            */
    
    }
     else if(answer.strAnswer){

     }
}


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
      checkSolution(answer, next);
    }

  
};

module.exports = Answer;
