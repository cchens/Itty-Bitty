/**
* User.js
*
* @description :: A User (with Passport)
* @docs        :: http://sailsjs.org/#!/documentation/concepts/ORM
*/

module.exports = {

  attributes: {

    username: {
      type: 'string',
      unique: true
    },

    email: {
      type: 'email',
      unique: true
    },

    passports: {
      collection: 'Passport',
      via: 'user'
    },

    name: {
      type: 'string',
      defaultsTo: null
    },

    photo: {
      type: 'text',
      defaultTo: null
    },

    achievements: {
      type: 'json',
      defaultsTo: []
    },

    status: {
      type: 'array',
      defaultsTo: []
    }
  }

};
