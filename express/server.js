"use strict";
exports.__esModule = true;
var express = require("express");
var controllers_1 = require("./controllers");
var controllers_2 = require("./controllers");
var controllers_3 = require("./controllers");
// Create a new express application instance
var app = express();
// The port the express app will listen on
var port = process.env.PORT || 3000;
// Mount the WelcomeController at the /welcome route
app.use('/welcome', controllers_1.WelcomeController);
app.use('/login', controllers_2.AuthController);
app.use('/api/recipes', controllers_3.RecipesController);
// Serve the application at the given port
app.listen(port, function () {
    // Success callback
    console.log("Listening at http://localhost:" + port + "/");
});