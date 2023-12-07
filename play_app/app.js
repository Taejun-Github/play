var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger
    = require('morgan');
const mongoose = require("mongoose");
const cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

let frontAddress = 'http://localhost:5173'

const corsOptions = {
    origin: frontAddress,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
};


app.use(cors(corsOptions));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/favicon.ico', (req, res) => res.status(204));
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

mongoose
    .connect("mongodb+srv://tjkimin2021:password@playground.ilxoi6j.mongodb.net/play?retryWrites=true&w=majority")
    .then((result) => {
        console.log(result);
        console.log('데이터베이스 연결 성공');
      app.listen(8080);
    })
    .catch((err) => {
      console.log(err);
    });

module.exports = app;
