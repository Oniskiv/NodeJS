import passport from '../passport/passport-config';

exports.login = (req, res, next) => {
    passport.authenticate('local',
        (err, user) => {
            return err
                ? next(err)
                : user
                    ? req.logIn(user, function (err) {
                        return err
                            ? next(err)
                            : res.end('You have successfully logged in');
                    })
                    : res.end('Something went wrong');
        }
    )(req, res, next);
};

exports.logout = (req, res) => {
    req.logout();
    res.end('You are logged out');
};