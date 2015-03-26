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

    level: {
      model: 'Levels'
    },

    score: {
      type: 'integer',
      notNull: true
    }

  },

  beforeCreate: function(values, next) {
    next();
  }

};
