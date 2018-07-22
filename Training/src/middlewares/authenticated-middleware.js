const authenticated = (req, res, next) => {
    req.isAuthenticated()
        ? next()
        : res.end('You are not logged in.');
};

export default authenticated;