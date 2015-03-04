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
      // TODO: fetch levels to display

      return res.view('levels', { 'type': type });
    } else {
      return res.redirect('tutorials');
    }
  },

  level: function (req, res) {
    var type  = req.params.type,
        level = req.params.level;

    // TODO: get appropriate level content from db

    return res.view('level', { 'type': type, 'level': level });
  }

};
