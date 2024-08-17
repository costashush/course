console.log("Starting up");

const fs = require('fs');
const os = require('os');

var display;

var user = os.userInfo();
var comp = os.cpus();
// fs.appendFile('./greetings.txt', `hello ${user.username} ${comp[0].model} ${comp[0].speed}!\n`, function(err) {

//     if (err) {
//         console.log('unable to write to the file');
//     } else {
//         console.log('ffffff');
//     }

// });
// fs.readFile('./greetings.txt', 'utf8', function(err, html) {
//     if (err) {
//         throw err;
//     } else {
//         console.log(data);
//         display = data;

//     }

// });



// fs.appendFile('./index.html', `hello ${user.username} ${comp[0].model} ${comp[0].speed}!\n`, function(err) {

//     if (err) {
//         console.log('unable to write to the file');
//     } else {
//         console.log('ffffff');
//     }

// });


fs.readFile('./index.html', 'utf8', function(err, html) {
    if (err) {
        throw err;
    } else {
        // console.log(data);
        // display = data;


        var http = require('http');
        http.createServer(function(req, res) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(html);
            res.end('Hello World\n' + display);

        }).listen(2222, "127.0.0.1");
        console.log('server running');
    }

});