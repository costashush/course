console.log("starting app.js");




const fs = require('fs');
const os = require('os');


// const notes = require('./notes.js');

// console.log(notes);

// var res = notes.addNote();

console.log('Result:', notes.add);



fs.readFile('./index.html', 'utf8', function(err, html) {
    if (err) {
        throw err;
    } else {


        var http = require('http');
        http.createServer(function(req, res) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(html);
            res.end();

        }).listen(2222, "127.0.0.1");
        console.log('server running');
    }

});