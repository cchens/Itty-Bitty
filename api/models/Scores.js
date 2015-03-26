/**
* Scores.js
*
* @description :: Score for a User at a Level
* @docs        :: http://sailsjs.org/#!/documentation/concepts/ORM
*/

module.exports = {

  attributes: {

    user: {
      model: 'User'
    },

    question_id: {
      model: 'Questions'
    },

    score: {
      type: 'integer',
      notNull: true
    }

  }

};
