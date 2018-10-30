import * as express from 'express';

import {
    AuthController,
    RecipesController,
    UsersController,
    FoodController,
    ListsController
} from './controllers';

// Create a new express application instance
const app: express.Application = express();
// The port the express app will listen on
const port = process.env.PORT || 3000;

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