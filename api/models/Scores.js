/**
* Scores.js
*
* @description :: Score for a User at a Level
* @docs        :: http://sailsjs.org/#!/documentation/concepts/ORM
*/

module.exports = {

  attributes: {

    user_id: {
      model: 'Users'
    },

    level_id: {
      model: 'Levels'
    },

    score: {
      type: 'integer',
      notNull: true
    },

  }
};