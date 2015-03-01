/**
* Achievements.js
*
* @description :: An Achievement
* @docs        :: http://sailsjs.org/#!/documentation/concepts/ORM
*/

module.exports = {

  attributes: {

    achievement_id: {
      type: 'integer',
      autoIncrement: true,
      primaryKey: true
    },

    name: {
      type: 'string',
      size: 200,
      unique: true
    },

    description: {
      type: 'string',
      defaultTo: null
    },

  }
};