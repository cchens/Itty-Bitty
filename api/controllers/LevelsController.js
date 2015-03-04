/**
 * LevelsController
 *
 * Description
 */

module.exports = {

  index: function (req, res) {
    return res.view('tutorials', {
      loggedIn: false
    });
  }

};
