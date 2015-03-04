/**
 * LevelsController
 *
 * Description
 */

module.exports = {

  index: function (req, res) {
    return res.view('tutorials');
  },

  levels: function (req, res) {
    var type = req.params.type;

    if (type === 'bitwise' || type === 'bases') {
      return res.view('levels', { 'type': type });
    } else {
      return res.redirect('tutorials');
    }
  },

};
