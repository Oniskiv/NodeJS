import memoryDB from "../../db/memory-db";

const LocalStrategy = require('passport-local').Strategy;

const strategy = new LocalStrategy((username, password, done) => {
        let user = memoryDB.getUserByLogin(username);
        if (!user || user.login !== username || user.password !== password) {
            return done(null, false);
        }
        return done(null, user);
    }
);

export default strategy;