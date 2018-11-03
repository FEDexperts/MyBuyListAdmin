"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1.Router();
router.get('/missing/1', function (req, res) {
    res.send(missing);
});
router.post('/missing/1', function (req, res) {
    console.log('Add new item => ', req.body);
    missing.push({
        listId: 2,
        ownerId: 1,
        itemId: req.body.FoodId,
        itemName: req.body.FoodName,
        itemUnit: ""
    });
    res.send(missing);
});
router.get('/missing/1/single/', function (req, res) {
    console.log('Get single item', req.query.foodId);
    var _missing = missing.find(function (item) { return item.itemId == req.query.foodId; });
    res.send(_missing);
});
router.get('/shopping', function (req, res) {
    res.send(shopping);
});
exports.ListsController = router;
var missing = [
    {
        "listId": 2,
        "ownerId": 1,
        "itemId": 395,
        "itemName": "ממרח שוקולד של חברת נוטלה",
        "itemUnit": "כף/כפות"
    },
    {
        "listId": 2,
        "ownerId": 1,
        "itemId": 1164,
        "itemName": "מזולה (ממרח)",
        "itemUnit": "כף/כפות"
    },
    {
        "listId": 2,
        "ownerId": 1,
        "itemId": 2545,
        "itemName": "מללפון",
        "itemUnit": "ק\"ג"
    }
];
var shopping = [
    {
        name: 'חלב',
        unit: 'יחידה',
        quantity: 3
    }
];
