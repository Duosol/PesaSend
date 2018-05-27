const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const userController = require('../controllers/users');
// const productController = require('../../controllers/product');
var db = require('../models');

// router.get('/users', (req, res) => {
//     db.User.findAll({}).then((result) => {
//         res.json(result);
//     });
//     // res.json("yes");
// })

router.get('/users', userController.all);
router.get('/user/:id', userController.byId);
router.post('/user', userController.create);
router.put('/user/:id', userController.update);
router.delete('/user/:id', userController.delete);

// router.get('/product', productController.all);
// router.get('/product/:id', productController.byId);
// router.post('/product', productController.create);
// router.put('/product/:id', productController.update);
// router.delete('/product/:id', productController.delete);

module.exports = router;