const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('mock/db.json');
const middlewares = jsonServer.defaults();

let metadata = {};

server.use(middlewares)

server.get('/echo', (req, res) => {
    res.jsonp(req.query);
})

// server.get('/login', (req, res) => {
//     console.log(res.locals.data);
//     res.jsonp(res.locals.data);
// })

server.use(jsonServer.bodyParser);

server.use(jsonServer.rewriter({
    '/api/recipes/list': '/recipes',
    '/api/recipes/ingrediants': '/ingrediants'
}))

server.route('/login', './auth');

server.use(router)
server.listen(3000, () => {
    console.log('JSON Server is running')
})