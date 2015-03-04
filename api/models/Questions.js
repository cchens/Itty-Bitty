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
    },

    choice1: {
      type: 'string',
      defaultTo: null
    },

    choice2: {
      type: 'string',
      defaultTo: null
    },

    choice3: {
      type: 'string',
      defaultTo: null
    },

    choice4: {
      type: 'string',
      defaultTo: null
    },

    answer: {
      type: 'string',
      notNull: true
    },

    explanation: {
      type: 'string',
      notNull: true
    }

  }
};
