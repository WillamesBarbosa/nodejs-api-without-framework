const http = require('http');
const routes = require('./routes.js');

const server = http.createServer((request, response)=>{

    const route = routes.find((objectRoute)=>{
        return objectRoute.endpoint === request.url && objectRoute.method === request.method
    })

    if(route) {
        route.handler(response)
    }else{
        response.writeHead(404, {'content-type': 'text/html'});
        response.end('<h1>404</h1>');
    }
});

server.listen(3000, () => {
    console.log('server is running at http://localhost:3000')
} )