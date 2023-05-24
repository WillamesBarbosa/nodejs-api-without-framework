const OrderId = require('../functions/OrderId');
const users = require('../mocks/users')


module.exports = {
    listUsers(request, response){
        const {order} = request.query

        const userSorteds = OrderId(order, users)

        response.writeHead(200, {'content-type': 'application/json'});
        response.end(JSON.stringify(usersSorteds));
    }
}