var exports = module.exports = {}
 
exports.signup = function(req, res) {
 
    res.render('signup', ({ layout: "passport.handlebars" }));
 
}

exports.signin = function(req, res) {
 
    res.render('signin', ({ layout: "passport.handlebars" }));
 
}

exports.dashboard = function(req, res) {
 
    res.render('profile-page', {layout: 'main.handlebars'} );
 
}

exports.logout = function(req, res) {
 
    req.session.destroy(function(err) {
 
        res.redirect('/');
 
    });
 
}