var User = {
  // Enforce model schema in the case of schemaless databases
  schema: true,

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

module.exports = User;
