const { showHome } = require("./controllers/HomeController");
const { listProducts } = require("./controllers/ProductController");
const { listUsers } = require("./controllers/UserController");

module.exports = [
    {
        endpoint: '/',
        method: 'GET',
        handler: showHome
    },
    {
        endpoint: '/products',
        method: 'GET',
        handler: listProducts
    },
    {
        endpoint: '/users',
        method: 'GET',
        handler: listUsers
    },
]