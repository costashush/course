var url = require('url');
var fs = require('fs');

var registeredUrls = {};


function register(url, func) {
    registeredUrls[url] = func


}

function route(req, res) {
    var pathname = url.parse(req.url).pathname;

    if (registeredUrls[pathname] !== undefined) {

        registeredUrls[pathname](req, res)


    } else {
        res.writeHead(404, {
            'content-type': 'text/html'
        });
        res.write('<h1>404</h1>');
        res.end();
    }


}

module.exports = {

    register: register,
    route: route
}