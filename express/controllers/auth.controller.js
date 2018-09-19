"use strict";
exports.__esModule = true;
var users = [
    {
        "email": "test@gmail.com",
        "pass": "test",
        "firstName": "Oren",
        "lastName": "Levi",
        "mobile": "054-7637174",
        "address": "Ariel",
        "id": 1
    }
];
var express_1 = require("express");
var router = express_1.Router();
router.get('/', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    var email = req.query['email'];
    var pass = req.query['pass'];
    var user = users
        .find(function (user) { return user.email === email && user.pass === pass; });
    // .map(user => {
    //     return {
    //         id: user.id,
    //         firstName: user.firstName,
    //         lastName: user.lastName,
    //         mobile: user.mobile,
    //         address: user.address
    //     }
    // })
    res.send(user);
});
exports.AuthController = router;
