
/*
 * GET home page.
 */
exports.index = function(req, res){
  res.render('index', { title: 'Oslo Gigs'});
};

exports.mobile = function(req, res){
  res.render('mobile', { title: 'Oslo Gigs - Øl map'});
};

exports.find = function(req, res){
    res.render('find', { title: 'Oslo Gigs - Find Venues'});
};
