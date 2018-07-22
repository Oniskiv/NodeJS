import express from 'express';
import passport from './../passport/passport-twitter';

const router = express.Router();

router.get('/login/twitter',
    passport.authenticate('twitter')
);

router.get('/login/twitter/callback',
    passport.authenticate('twitter', {
        successRedirect : '/twitter',
        failureRedirect : '/'
    })
);

router.get('/twitter', isAuthenticated, function(req, res){
    res.render('twitter', { user: req.user });
});

module.exports = router;