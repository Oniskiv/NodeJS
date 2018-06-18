import passport from 'passport';
const TwitterStrategy = require('passport-twitter').Strategy;
import config from './../../config/configuration';

passport.use('twitter', new TwitterStrategy({
        consumerKey     : 'TX8LbZx4fq7ey02QwZdwuIwmD',
        consumerSecret  : '4RkviSbV66SO5Ai2zlaCiGa4D3lhCk747azc54BTEpy0LP9U6G',
        callbackURL     : 'http://127.0.0.1:3000/login/twitter/callback'
    },
    function(token, tokenSecret, profile, done) {
        // make the code asynchronous
        // User.findOne won't fire until we have all our data back from Twitter
        process.nextTick(function() {

            console.log('nextTick');
            /*User.findOne({ 'twitter.id' : profile.id },
                function(err, user) {
                    // if there is an error, stop everything and return that
                    // ie an error connecting to the database
                    if (err)
                        return done(err);

                    // if the user is found then log them in
                    if (user) {
                        return done(null, user); // user found, return that user
                    } else {
                        // if there is no user, create them
                        var newUser                 = new User();

                        // set all of the user data that we need
                        newUser.twitter.id          = profile.id;
                        newUser.twitter.token       = token;
                        newUser.twitter.username = profile.username;
                        newUser.twitter.displayName = profile.displayName;
                        newUser.twitter.lastStatus = profile._json.status.text;

                        // save our user into the database
                        newUser.save(function(err) {
                            if (err)
                                throw err;
                            return done(null, newUser);
                        });
                    }
                });*/
        });
    })
);

export default passport;