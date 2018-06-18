import passport from 'passport';
import localStrategy from "./strategies/local-strategy";
import twitterStrategy from './strategies/twitter-strategy';
import memoryDB from "../db/memory-db";

passport.use(localStrategy);

passport.serializeUser(function (user, done) {
    done(null, user.login);
});


passport.deserializeUser(function (id, done) {
    let user = memoryDB.getUserByLogin(id);
    if (user) {
        done(null, user);
    } else {
        done({error: "Something went wrong!"});
    }
})

export default passport;