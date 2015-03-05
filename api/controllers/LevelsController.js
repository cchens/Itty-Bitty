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
      Levels
      .find()
      .where({ type: type })
      .exec(function (err, levels) {
        if (levels === undefined) return res.notFound();
        if (err) return res.negotiate(err);

        // TODO: Gets all the levels, but need to get the numbers with difficulties
        console.log(levels);

        res.view('levels', {
          'type': type
        });
      });
    } else {
      res.redirect('tutorials');
    }
  },

};
