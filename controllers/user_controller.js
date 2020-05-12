//Dependencies
const db = require("../models"); // model objects

// returns ARRAY, all user
user_list = (req, res) => {
    db.User.find({})
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot find an user!`
                });
            } else res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: `Error in finding user.`
            });
        })
};

// returns OBJECT, single user 
user_by_id = (req, res) => {
    db.User.findById(req.params.id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot find user with id=${req.params.id}!`
                });
            } else res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: `Error in finding user with id=${req.params.id}.`
            });
        })
};

// returns OBJECT, new user
user_create = (req, res) => {
    if (!req.body.email) {
        res.status(400).send({ message: "User email must exists!" });
        return;
    }
    // create User
    const newUser = new db.User({
        first_name: req.body.first_name,
        last_name: req.body.last_name, // database retrieval 
        email: req.body.email, // form data
        note: req.body.note, // form data
    });
    newUser
        .save(newUser)
        .then(data => {
            res.send(data);
        })
        // user error catch
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "An error occurred while creating new user."
            });
        });
};

// returns OBJECT, updated user 
user_update = function (req, res) {
    if (!req.body) {
        return res.status(400).send({
            message: "User data can not be empty!"
        });
    }
    db.User.findByIdAndUpdate(req.params.id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update user with id=${req.params.id}. user was not found!`
                });
            } else res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: `Error updating user with id=${req.params.id}.`
            });
        });
};

// returns OBJECT, deleted user 
user_delete = (req, res) => {
    db.User.findByIdAndDelete(req.params.id)
        .then(user => {
            console.log(`deleting user document:`);
            console.log(user)
            res.json(user);
        })
        .catch(err => {
            res.json(err);
        });
}

module.exports = {
    user_list,
    user_by_id,
    user_create,
    user_update,
    user_delete
}
