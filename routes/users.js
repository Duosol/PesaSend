// var express = require('express');
// var router = express.Router();


// // /* GET users listing. */
// // router.get('/', function(req, res, next) {
// //   res.send('respond with a resource');
// // });

// // module.exports = router;


// 'use strict';

// // const users = require('../models/user');

// module.exports = (router, user) => {

//     // GET all users
//     router.get('/users', (req, res) => {
//         db.users.findAll()
//             .then(users => {
//                 res.json(users);
//             });
//     });

//     // GET one user by id
//     router.get('/user/:id', (req, res) => {
//         const id = req.params.id;
//         users.find({
//                 where: { id: id }
//             })
//             .then(user => {
//                 res.json(user);
//             });
//     });

//     // POST single user
//     router.post('/user', (req, res) => {
//         const name = req.body.name;
//         const role = req.body.role;
//         users.create({
//                 name: name,
//                 role: role
//             })
//             .then(newuser => {
//                 res.json(newuser);
//             })
//     });

//     // PATCH single user
//     router.patch('/user/:id', (req, res) => {
//         const id = req.params.id;
//         const updates = req.body.updates;
//         users.find({
//                 where: { id: id }
//             })
//             .then(user => {
//                 return user.updateAttributes(updates)
//             })
//             .then(updateduser => {
//                 res.json(updateduser);
//             });
//     });

//     // DELETE single user
//     app.delete('/user/:id', (req, res) => {
//         const id = req.params.id;
//         users.destroy({
//                 where: { id: id }
//             })
//             .then(deleteduser => {
//                 res.json(deleteduser);
//             });
//     });
// };