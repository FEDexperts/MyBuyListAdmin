const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('mock/db.json');
const middlewares = jsonServer.defaults();

let metadata = {};

server.use(middlewares)

server.get('/echo', (req, res) => {
    res.jsonp(req.query)
})

server.use(jsonServer.bodyParser);

server.use(jsonServer.rewriter({
    '/api/recipes/list': '/recipes',
    '/api/recipes/ingrediants': '/ingrediants'
}))

server.use(router)
server.listen(3000, () => {
    console.log('JSON Server is running')
})