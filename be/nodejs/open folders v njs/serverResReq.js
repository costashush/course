      ///read from url and open folders
      var http = require('http');
      const fs = require('fs');

      //create a server object//

      http.createServer(function(req, res) {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          var html = gethtml(req.url);


          res.write(html);
          res.end();



      }).listen(2222, "127.0.0.1");
      console.log('server running');



      function gethtml(url) {
          return fs.readFileSync('.' + url, 'utf8', function(err, html) {
              console.log(err);
              if (err) {
                  console.log('error acured');


              }
          });
      }