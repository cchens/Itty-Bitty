/**
* Questions.js
*
* @description :: A Question
* @docs        :: http://sailsjs.org/#!/documentation/concepts/ORM
*/

module.exports = {

  attributes: {

    question_id: {
      type: 'integer',
      autoIncrement: true,
      primaryKey: true
    },

    level_id: {
      model: 'Levels'
    },

    question: {
      type: 'string',
      notNull: true
    }

    choice1: {
      type: 'string'
    }

    choice2: {
      type: 'string'
    }

    choice3: {
      type: 'string'
    }

    choice4: {
      type: 'string'
    }

    answer: {
      type: 'string',
      notNull: true
    }

    explanation: {
      type: 'string',
      notNull: true
    }

  }
};