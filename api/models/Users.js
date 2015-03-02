/**
* Users.js
*
* @description :: A User
* @docs        :: http://sailsjs.org/#!/documentation/concepts/ORM
*/

module.exports = {

  attributes: {

    user_id: {
      type: 'integer',
      autoIncrement: true,
      primaryKey: true
    },

    provider: {
      type: 'string',
      size: 20
    },

    id: {
      type: 'string',
      unique: true
    },

    displayName: {
      type: 'string',
      notNull: true
    },

    name: {
      type: 'json'
    },

    email: {
      type: 'string',
      size: 50,
      notNull: true
    },

    photo: {
      type: 'text',
      defaultTo: null
    },

    achievements: {
      type: 'json'
    },

    password: {
      type: 'string',
      notNull: true
    }

  }
};
