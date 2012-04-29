
/*
 * GET home page.
 */
exports.index = function(req, res){
  res.render('index', { title: 'Oslo Gigs'});
};

exports.mobile = function(req, res){
  res.render('mobile', { title: 'Øl map'});
};

