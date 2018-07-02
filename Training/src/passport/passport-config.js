import passport from 'passport';
import localStrategy from "./strategies/local-strategy";
import User from "../models/user";

passport.use(localStrategy);

passport.serializeUser(function (user, done) {
    done(null, user.login);
});


passport.deserializeUser(function (id, done) {
    User.findOne({login: id}, (err, user) => {
        if (user) {
            done(null, user);
        } else {
            done({error: "Something went wrong!"});
        }
    });
});

export default passport;