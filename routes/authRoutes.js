var authController = require('../controller/authcontroller.js');

module.exports = function (app, passport) {

    app.get('/signup', authController.signup);

    app.get('/', authController.signin);

    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/interest',

        failureRedirect: '/signup'
    }

    ));

    app.get('/interest', isLoggedIn, authController.dashboard);

    app.get('/logout', authController.logout);

    app.post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/interest',

        failureRedirect: '/'
    }

    ));

    function isLoggedIn(req, res, next) {

        if (req.isAuthenticated())

            return next();

        res.redirect('/');

    }

}