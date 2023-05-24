module.exports = {
    showHome(request, response){

        response.send(
                200, 
                '<h1>Esta e a Home </h1> <br> <a href="/products" >Produtos</a> <a href="/users" >Usuarios</a>', 
                'text/html'
            )
    }
}