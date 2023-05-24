const products = require("../mocks/products");

module.exports = {
    listProducts(response) {
        response.writeHead(200, {'content-type': 'application/json'});
        response.end(JSON.stringify(products));
    }
}