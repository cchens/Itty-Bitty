/**
 * SiteController
 *
 * Description
 */

module.exports = {

  index: function (req, res) {
    if (!req.session.authenticated)
      return res.view('homepage',
        {
          layout: 'homelayout',
          loggedIn: false
        });
    else
      return res.view('homepage',
        {
          layout: 'layout',
          loggedIn: true
        });
  }

};
