/**
* Scores.js
*
* @description :: Score for a User at a Level
* @docs        :: http://sailsjs.org/#!/documentation/concepts/ORM
*/

module.exports = {

  attributes: {

    username: {
      model: 'User'
    },

    level_id: {
      model: 'Levels'
    },

    score: {
      type: 'integer',
      notNull: true
    }

  }
};
