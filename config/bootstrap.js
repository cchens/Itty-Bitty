/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#/documentation/reference/sails.config/sails.config.bootstrap.html
 */

var Barrels = require('barrels');

module.exports.bootstrap = function(done) {

  // Load Passport providers
  sails.services.passport.loadStrategies();

  // Load fixtures (from test/fixtures/) into database
  var barrels = new Barrels();
  var fixtures = barrels.data;

  barrels.populate(function(err) {
    if (err)
      return done(err);

    // Users will already be populated here, so the required association should work
    // barrels.populate(['Passport'], function(err) {
    //   if (err)
    //     return done(err);

    //   // Everything else
    //   barrels.populate(function(err) {
    //     if (err)
    //       return done(err);

    //     done();
    //   });
    // });
    done();
  });

};
