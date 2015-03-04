/**
 * SiteController
 *
 * Description
 */

module.exports = {

  index: function (req, res) {
    if (!req.session.authenticated) {
      return res.view('homepage', { layout: 'homelayout' });
    } else {
      return res.view('homepage', { layout: 'layout' });
    }
  }

};
