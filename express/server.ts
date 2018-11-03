import * as express from 'express';
var bodyParser = require('body-parser')

import {
    AuthController,
    RecipesController,
    UsersController,
    FoodController,
    ListsController
} from './controllers';

// Create a new express application instance
const app: express.Application = express();
app.use(bodyParser.json())
// The port the express app will listen on
const port = process.env.PORT || 3000;

app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Mount the WelcomeController at the /welcome route
app.use('/login', AuthController);
app.use('/api/recipes', RecipesController);
app.use('/api/users', UsersController);
app.use('/api/foods', FoodController);
app.use('/api/lists', ListsController);

// Serve the application at the given port
app.listen(port, () => {
    // Success callback
    console.log(`Listening at http://localhost:${port}/`);
});