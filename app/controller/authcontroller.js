var exports = module.exports = {}
 
exports.signup = function(req, res) {
 
    res.render('signup'); //these paths will be changed to our webpage routes
 
}

exports.signin = function(req, res) {
 
    res.render('signin'); //these paths will be changed to our webpage routes
 
}

exports.dashboard = function(req, res) {
 
    res.render('dashboard'); //these paths will be changed to our webpage routes
 
}

exports.logout = function(req, res) {
 
    req.session.destroy(function(err) {
 
        res.redirect('/');
 
    });
 
}