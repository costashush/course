<<<<<<< HEAD
const express = require('express')
const app = express()

app.use(express.static(__dirname))

app.listen(3000, function() {
    console.log('Example app listening on port 3000!')
})
=======
var http = require('http')
var url = require('url')
var fs = require('fs')

http.createServer(function(request, response) {
    var requestUrl = url.parse(request.url);
    response.writeHead(200)

    var myStream = fs.createReadStream('.' + requestUrl.pathname);
    myStream.on('error', function(e) { console.log("error:" + e); });
    myStream.pipe(response);

}).listen(3000);
>>>>>>> 38746ce01de04f2bc7cc8e09fbebdd3f1b4b9fa3
