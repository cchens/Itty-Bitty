/**
 * AchievementsController
 *
 * @description :: Server-side logic for managing Achievements
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	index: function (req, res) {
		Achievements
      	.find()
      	.sort('name ASC')
      	.exec(function (err, achievements) {
        	if (achievements === undefined) return res.notFound();
        	if (err) return res.negotiate(err);
    		res.view('achievements', {
    			'achievements': achievements
    		});
    	});
  	},
};