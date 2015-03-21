/**
 * SiteController
 *
 * Description
 */

module.exports = {

  index: function (req, res) {
    if (!req.user) {
      return res.view('homepage', { layout: 'homelayout' });
    } else {
      return res.view('tutorials');
    }
  }

};
