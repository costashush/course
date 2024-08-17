const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Middlewares moved morgan into if for clear tests
  app.use(morgan('dev'));

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: false}));

  app.use(express.static(path.join(__dirname, './src/')));


  // catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Page not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res) => {
  const dev = app.get('env');
  const status = err.status || 500;
  if (dev === 'test') {
    res.status('404').json({});
  }
  if (dev === 'development') {
    res.status(status).json({
      error: {
        message: err.message
      }
    });
    console.log(err);
  } else {
    res.status(status).json({
      error: 500
    });
    console.log(err);
  }
});



module.exports = app;
