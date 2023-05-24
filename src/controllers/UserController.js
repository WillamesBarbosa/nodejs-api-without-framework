const OrderId = require('../functions/OrderId');
const users = require('../mocks/users')


module.exports = {
    listUsers(request, response){
        const {order} = request.query

        const userSorteds = OrderId(order, users)

        response.writeHead(200, {'content-type': 'application/json'});
        response.end(JSON.stringify(userSorteds));
    },

    getUsersById(request, response){
        const {id} = request.params
        const user = users.find((user)=> user.id === Number(id))

        response.writeHead(200, {'content-type': 'application/json'});
        response.end(JSON.stringify(user));
        console.log(request.params)
        console.log('123')
    }
}