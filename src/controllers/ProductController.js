const OrderId = require("../functions/OrderId");
const products = require("../mocks/products");

module.exports = {
    listProducts(request, response) {
        const {order} = request.query;

        const productSorteds = OrderId(order, products)

        response.send(200, productSorteds)
    },

    getProductsById(request, response){
        const {id} = request.params;
        const product = products.find((product)=> product.id === Number(id))

        if(!product) return response.send(404, {"error": "not found"})

        return response.send(200, product)
    }
}