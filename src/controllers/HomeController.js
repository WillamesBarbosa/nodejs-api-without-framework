module.exports = {
    showHome(response){
        response.writeHead(200, {'content-type':'text/html'});
        response.end('<h1>Esta e a Home </h1> <br> <a href="/products" >Produtos</a> <a href="/users" >Usuarios</a>')
    }
}