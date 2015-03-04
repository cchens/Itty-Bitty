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

    name: {
      type: 'string',
      size: 200,
      unique: true,
    },

    description: {
      type: 'string',
      defaultTo: null
    },

    type: {
      type: 'string',
      size: 50,
      notNull: true,
    },

    difficulty: {
      type: 'integer',
      notNull: true
    },

    content: {
      type: 'json',
      defaultsTo: null
    }

  }
};
