const http = require('http');
const {URL} = require('url');
const routes = require('./routes.js');
const { parse } = require('path');

const server = http.createServer((request, response)=>{

    const parsedUrl = new URL(`http://localhost:3000${request.url}`)

    
    let {pathname} = parsedUrl;
    let id = null;

    const splitAndPoint = pathname.split('/').filter(Boolean);

    if(splitAndPoint.length > 1){
        pathname = `/${splitAndPoint[0]}/:id`;
        id = splitAndPoint[1];

    }
    
    const route = routes.find((objectRoute)=>{
        return objectRoute.endpoint === pathname && objectRoute.method === request.method;
    })

    if(route) {
        request.query = Object.fromEntries(parsedUrl.searchParams);
        request.params = {id};

        route.handler(request, response);
    }else{
        response.writeHead(404, {'content-type': 'text/html'});
        response.end('<h1>404</h1>');
    }
});

server.listen(3000, () => {
    console.log('server is running at http://localhost:3000')
} )