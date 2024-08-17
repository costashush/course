var http = require('http');
var router = require('./router');
var hostname = 'localhost',
    port = 3000;

router.register('/', mainPage);
router.register('/hello', hello);



http.createServer(onRequest).listen(port, hostname);

















function onRequest(req, res) {
    router.route(req, res);

    function mainPage(req, res) {


        res.writeHead(200, { 'content-type': 'text/html' });
        res.write('<h1>main page</h1>')
    }

    function hello(req, res) {


        res.writeHead(200, { 'content-type': 'text/html' });
        res.write('<h1>hallo</h1>')
    }
}