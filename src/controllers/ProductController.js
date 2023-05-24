const OrderId = require("../functions/OrderId");
const products = require("../mocks/products");

module.exports = {
    listProducts(request, response) {
        const {order} = request.query;

        const productSorteds = OrderId(order, products)

        response.writeHead(200, {'content-type': 'application/json'});
        response.end(JSON.stringify(productSorteds));
    }
}