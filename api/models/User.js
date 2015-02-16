/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    // Simple attribute:
    // name: 'STRING',

    // Or for more flexibility:
    // phoneNumber: {
    //    type: 'STRING',
    //    defaultsTo: '555-555-5555'
    // }

    name: {
      type: 'STRING'
    },

    email: {
      type: 'STRING'
    },

    password: {
      type: 'STRING'
    }

  }
};
