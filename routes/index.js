const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const userController = require('../controllers/users');
const trxController = require('../controllers/trx');
// const productController = require('../../controllers/product');
var db = require('../models');

router.get('/users', userController.all);
router.get('/user/:id', userController.byId);
router.post('/user', userController.create);
router.put('/user/:id', userController.update);
router.delete('/user/:id', userController.delete);

router.get('/user/:id/trx', trxController.userTrx);

router.get('/trx', trxController.all);
router.get('/trx/:id', trxController.byId);
router.post('/trx', trxController.create);
router.put('/trx/:id', trxController.update);
router.delete('/trx/:id', trxController.delete);


router.post('/trx', (req, res) => {

    // db.TransactionDeposit.findAll({}).then((result) => {
    //     res.json(result);
    // });
    // // res.json("yes");
})

// router.get('/product', productController.all);
// router.get('/product/:id', productController.byId);
// router.post('/product', productController.create);
// router.put('/product/:id', productController.update);
// router.delete('/product/:id', productController.delete);

module.exports = router;