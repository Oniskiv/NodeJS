import db from "../../db/pg-db";
import {Strategy as LocalStrategy} from 'passport-local';

const strategy = new LocalStrategy((username, password, done) => {
        db.getUserByLogin(username).then(user => {

            if (!user || user.login !== username || user.password !== password) {
                return done(null, false);
            }
            return done(null, user);
        });
    }
);

export default strategy;