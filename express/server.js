"use strict";
exports.__esModule = true;
var express = require("express");
var bodyParser = require('body-parser');
var controllers_1 = require("./controllers");
// Create a new express application instance
var app = express();
app.use(bodyParser.json());
// The port the express app will listen on
var port = process.env.PORT || 3000;
app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
// Mount the WelcomeController at the /welcome route
app.use('/login', controllers_1.AuthController);
app.use('/api/recipes', controllers_1.RecipesController);
app.use('/api/users', controllers_1.UsersController);
app.use('/api/foods', controllers_1.FoodController);
app.use('/api/lists', controllers_1.ListsController);
// Serve the application at the given port
app.listen(port, function () {
    // Success callback
    console.log("Listening at http://localhost:" + port + "/");
});
