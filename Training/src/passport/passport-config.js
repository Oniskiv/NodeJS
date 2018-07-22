import passport from 'passport';
import localStrategy from "./strategies/local-strategy";
import db from "../db/pg-db";

passport.use(localStrategy);

passport.serializeUser(function (user, done) {
    done(null, user.login);
});


passport.deserializeUser(function (id, done) {
    db.getUserByLogin(id).then(user => {
        if (user) {
            done(null, user);
        } else {
            done({error: "Something went wrong!"});
        }
    });
})

export default passport;