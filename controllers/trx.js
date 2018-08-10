const db = require('../models');
const Op = db.Sequelize.Op;
const Mpesa = require('mpesa-node');

const mpesaApi = new Mpesa({
    consumerKey: 'QunidTYLYUwhmKptB8kXR4cw9n5rUA2E',
    consumerSecret: 'vrwXy0Sq2zkoex9v',
    environment: 'sandbox',
    shortCode: '600111',
    initiatorName: 'Test Initiator',
    lipaNaMpesaShortCode: 174379,
    lipaNaMpesaShortPass: 'bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919',
    securityCredential: 'ZHNvsruAl9XDZXCu0JGhK+1FheYUjl+PdyrR9uaWoeY0vjNiH1ZqHT8A5Rw6I54z6gEFt1ZnL3p8ue817VhRnkHoPFMdj4Pz5jL+a4NgB63OzSICwvaDKwDo3H/G4Rz92VLndyGKl1HVApDoknsJuhf/W/AoW/AR22klHN/0Mf+cnMlSqJuIEggrcwZSsZ5Ns19A3v173xW5/pKkoJVzYsnmBpu+4qGJ6N60a8ATSOV6YEmgreLhXn4+DyxyCuJcwaUR+FVaMHw8BsraQl0hcx9epNxP+ueWBrNxQ+WS5qccZCXq/Cc5rCPLryAaCYiycYUbZMbv5QkeWlMkpGrdAQ==',
    // certPath: path.resolve('keys/myKey.cert')
});

const {
    accountBalance,
    b2b,
    b2c,
    c2bRegister,
    c2bSimulate,
    lipaNaMpesaOnline,
    lipaNaMpesaQuery,
    reversal,
    transactionStatus
} = mpesaApi

// const testMSISDN = 254714611696

const testMSISDN = 254705651787

const amount = 100
const accountRef = Math.random().toString(35).substr(2, 7)
const URL = 'http://www.thetriad.tech'

var trxController = {
    create(req, res) {
        db.User.findOne({
            where: {
                [Op.or]: [{ email: req.body.email_from }, { phone: req.body.number_from }]
            },
        }).then(sender => {
            if (sender != null) {

                // Create trx

                // res.json({ "success": "Sender found" });

                db.TransactionDeposit.create({
                    user_id: sender.id,
                    amount: req.body.amount,
                    email_from: req.body.email_from,
                    number_from: req.body.number_from,
                    email_to: req.body.email_to,
                    number_to: req.body.number_to
                }, { include: [db.User] }).then(trx => {
                    res.json(trx);
                }, err => {
                    res.json({ "error": err.errors });
                });

                this.lipaNaMpesa(number_from, amount)

            } else {

                //Create User

                // res.json({ "failed": "New Sender" });

                db.User.create({
                    // firstname: req.body.firstname,
                    // lastname: req.body.lastname,
                    email: req.body.email_from,
                    // identification_no: req.body.identification_no,
                    phone: req.body.number_from,
                    user_type_id: 3
                }, { include: [db.UserType] }).then(user => {
                    // res.json(user);

                    db.TransactionDeposit.create({
                        user_id: user.id,
                        amount: req.body.amount,
                        email_from: req.body.email_from,
                        number_from: req.body.number_from,
                        email_to: req.body.email_to,
                        number_to: req.body.number_to
                    }, { include: [db.User] }).then(trx => {
                        res.json(trx);
                    }, err => {
                        res.json({ "error": err.errors });
                    });

                }, err => {
                    res.json({ "error": err.errors });
                });
            }
        }, err => {
            res.json(err.errors);
        });
    },

    all(req, res) {
        db.TransactionDeposit.findAll({})
            .then(trx => {
                res.json(trx);
                console.log(`Found ${trx.length} matching records.`);
            });
    },

    byId(req, res) {
        var _id = req.params.id;
        db.TransactionDeposit.findOne({
                where: {
                    id: _id
                }
            })
            .then(trx => {
                res.json(trx);
                console.log(`Found trx: ${trx}`);
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

    },

    userTrx(req, res) {
        var _id = req.params.id;
        db.TransactionDeposit.findAll({
                where: {
                    user_id: _id
                }
            })
            .then(trx => {
                res.json(trx);
                console.log(`Found trx: ${trx}`);
            });
    },

    lipaNaMpesa(number, amount) {
        async function mpesaCall() {
            let mpesaResp = await mpesaApi.lipaNaMpesaOnline(number, amount, URL, accountRef)
                // console.log(mpesaResp)
        }

        mpesaCall().then(resp => {
                console.log("Resp: ", resp);
            },
            error => {
                console.log("Error: ", error);
            })
    }
}

module.exports = trxController;