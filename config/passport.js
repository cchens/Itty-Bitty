/**
 * Passport configuration
 *
 * This if the configuration for your Passport.js setup and it where you'd
 * define the authentication strategies you want your application to employ.
 *
 * I have tested the service with all of the providers listed below - if you
 * come across a provider that for some reason doesn't work, feel free to open
 * an issue on GitHub.
 *
 * Also, authentication scopes can be set through the `scope` property.
 *
 * For more information on the available providers, check out:
 * http://passportjs.org/guide/providers/
 */

module.exports.passport = {
  local: {
    strategy: require('passport-local').Strategy
  },

  twitter: {
    name: 'Twitter',
    protocol: 'oauth',
    strategy: require('passport-twitter').Strategy,
    options: {
      consumerKey: 'GYrfzWxVlL2nVZkNptyEYz7jY',
      consumerSecret: 'L3SRN8Xt39386LaXsn3ZNQI1XgpR8niMq3fz72iLKMPN5jXt49'
    }
  },

  github: {
    name: 'GitHub',
    protocol: 'oauth2',
    strategy: require('passport-github').Strategy,
    options: {
      clientID: '5166844b011f5029504e',
      clientSecret: '4a64f45f2a010eefcc121222d84a83a62d419264'
    }
  },

  facebook: {
    name: 'Facebook',
    protocol: 'oauth2',
    strategy: require('passport-facebook').Strategy,
    options: {
      clientID: '1377242345932332',
      clientSecret: '8df9fcf772867cbe3c749e526d28f115'
    }
  },

  google: {
    name: 'Google',
    protocol: 'oauth2',
    strategy: require('passport-google-oauth').OAuth2Strategy,
    options: {
      clientID: '478667748175-5j82nkudo6ogu1guorb658at2vl2cusl.apps.googleusercontent.com',
      clientSecret: 'g4XnyZpBoe-IjgpKBX4aI3cf',
      scope: ['email']
    }
  }
};
