/**
* Levels.js
*
* @description :: A Level
* @docs        :: http://sailsjs.org/#!/documentation/concepts/ORM
*/

module.exports = {

  attributes: {

    level_id: {
      type: 'integer',
      autoIncrement: true,
      primaryKey: true
    },

    description: {
      type: 'string',
      defaultTo: null
    },

    type: {
      type: 'string',
      size: 50,
      notNull: true
    },

    level_num: {
      type: 'integer',
      notNull: true
    },

    difficulty: {
      type: 'integer',
      notNull: true
    },

    content: {
      type: 'json',
      defaultsTo: null
    }

  },

  getLevels: function (level_type) {
    Levels.find()
    .where({ type: level_type })
    .exec(function (err, levels) {
      if (err) return res.negotiate(err);

      return levels;
    });
  },

  getContent: function (level_id) {
    Levels.find()
    .where({ level_id: level_id })
    .exec(function (err, level) {
      if (err) return res.negotiate(err);

      return level.contents;
    });
  }

};
