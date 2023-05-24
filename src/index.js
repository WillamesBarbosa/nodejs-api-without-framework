const http = require('http');
const {URL} = require('url');
const routes = require('./routes.js');
const { parse } = require('path');

const server = http.createServer((request, response)=>{

    const parsedUrl = new URL(`http://localhost:3000${request.url}`)

    console.log(request.url)

    const route = routes.find((objectRoute)=>{
        return objectRoute.endpoint === parsedUrl.pathname && objectRoute.method === request.method
    })

    if(route) {
        request.query = Object.fromEntries(parsedUrl.searchParams)
        route.handler(request, response)
    }else{
        response.writeHead(404, {'content-type': 'text/html'});
        response.end('<h1>404</h1>');
    }
});

server.listen(3000, () => {
    console.log('server is running at http://localhost:3000')
} )