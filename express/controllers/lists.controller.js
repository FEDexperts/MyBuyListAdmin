"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1.Router();
router.get('/missing', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.send(missing);
});
router.get('/shopping', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.send(shopping);
});
exports.ListsController = router;
var missing = [
    {
        item: 'חלב',
        unit: 'יחידה',
        quantity: 3
    }
];
var shopping = [
    {
        name: 'חלב',
        unit: 'יחידה',
        quantity: 3
    }
];
