/*app.use(function (req, res, next) {
    // check if client sent cookie
    var cookie = req.cookies.cookieName;

        // no: set a new cookie
        var randomNumber=Math.random().toString();
        randomNumber=randomNumber.substring(2,randomNumber.length);
        res.cookie('cookieName',randomNumber, { maxAge: 900000, httpOnly: true });
        console.log('cookie created successfully');

    next(); // <-- important!
});*/