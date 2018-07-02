import User from './../models/user';

exports.allUsers = (req, res) => {
    User.find((err, users) => {
        res.status(200).json(users);
    });
};

exports.deleteUser = (req, res) => {
    User.remove({_id: req.params.id}, (err) => {
        res.status(200).json(`The user with id ${req.params.id} was deleted`);
    });
};
