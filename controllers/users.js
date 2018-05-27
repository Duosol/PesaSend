const db = require('../models');

var userController = {
    create(req, res) {
        db.UserType.findOne({
            where: { id: req.body.user_type_id }
        }).then(usertype => {
            if (usertype == null) {
                res.json({ "error": "No usertype like that" });
            } else {
                db.User.create({
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    email: req.body.email,
                    identification_no: req.body.identification_no,
                    phone: req.body.phone,
                    user_type_id: req.body.user_type_id
                }, { include: [db.UserType] }).then(user => {
                    res.json(user);
                }, err => {
                    res.json({ "error": err.errors });
                });
            }
        }, err => {
            res.json(err.errors);
        });
    },

    all(req, res) {
        db.User.findAll({})
            .then(users => {
                res.json(users);
                console.log(`Found ${users.length} matching records.`);
            });
    },

    byId(req, res) {
        var _id = req.params.id;
        db.User.findOne({
                where: {
                    id: _id
                }
            })
            .then(user => {
                res.json(user);
                console.log(`Found user: ${user}`);
            });
    },

    update(req, res) {
        var _id = req.params.id;

        db.User.update({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            identification_no: req.body.identification_no,
            phone: req.body.phone,
        }, {
            where: {
                id: _id
            }
        }).then(user => {
            res.json(user);
        });
    },

    delete(req, res) {
        var _id = req.params.id;

        db.User.destroy({
            where: {
                id: _id
            }
        }).then(user => {
            res.json(user);
        });

    }
}

module.exports = userController;