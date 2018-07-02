import {Strategy as LocalStrategy} from 'passport-local';
import User from "../../models/user";

const strategy = new LocalStrategy((username, password, done) => {
        User.findOne({login: username}, (err, user) => {
            if (!user || user.login !== username || user.password !== password) {
                return done(null, false);
            }
            return done(null, user);
        });
    }
);

export default strategy;