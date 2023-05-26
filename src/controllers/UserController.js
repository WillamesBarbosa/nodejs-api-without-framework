const OrderId = require('../functions/OrderId');
const users = require('../mocks/users')


module.exports = {
    listUsers(request, response){
        const {order} = request.query

        const userSorteds = OrderId(order, users)

        response.send(200, userSorteds)
    },

    getUsersById(request, response){
        const {id} = request.params
        const user = users.find((user)=> user.id === Number(id))
       
        if(!user) return response.send(404, {"error": "not found"})
        
        return response.send(200, user)
    },

    createUser(request, response){
        let body = ''
        request.on('data', (chunk)=>{
            body += chunk;
        })

        request.on('end', ()=>{
            body = JSON.parse(body)

            const lastUserId = users[users.length - 1].id;
            const newUser = {
                id: lastUserId + 1,
                name: body.name
            }

            users.push(newUser)

            response.send(200, newUser);
        })
    }
}