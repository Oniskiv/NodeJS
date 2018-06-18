import express from 'express';
import passport from './../passport/passport-twitter';

const router = express.Router();

// route for twitter authentication and login
// different scopes while logging in
router.get('/login/twitter',
    passport.authenticate('twitter')
);

// handle the callback after facebook has authenticated the user
router.get('/login/twitter/callback',
    passport.authenticate('twitter', {
        successRedirect : '/twitter',
        failureRedirect : '/'
    })
);

/* GET Twitter View Page */
router.get('/twitter', isAuthenticated, function(req, res){
    res.render('twitter', { user: req.user });
});

module.exports = router;