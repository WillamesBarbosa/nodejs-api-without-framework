const { showHome } = require("./controllers/HomeController");
const { listProducts, getProductsById } = require("./controllers/ProductController");
const { listUsers, getUsersById } = require("./controllers/UserController");

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
        endpoint: '/products/:id',
        method: 'GET',
        handler: getProductsById
    },
    {
        endpoint: '/users',
        method: 'GET',
        handler: listUsers
    },
    {
        endpoint: '/users/:id',
        method: 'GET',
        handler: getUsersById
    },
]