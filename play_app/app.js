const createError = require('http-errors');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger
    = require('morgan');
const mongoose = require("mongoose");
const cors = require('cors');

let authRouter = require('./routes/auth');


let app = express();

app.set('view engine', 'json'); // 미들웨어에 이것을 등록해야 뷰 리졸버를 사용하지 않게 된다.
app.use(bodyParser.json());

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


app.use(authRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// 오류 핸들러 미들웨어
app.use(function(err, req, res, next) {
    if (err.status === 404) {
        res.status(404).json({ error: 'Page Not Found' });
    } else {
        next(err);
    }
});

// 기본 에러 핸들러
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({ error: err.message || 'Internal Server Error' });
});


mongoose
    .connect("mongodb+srv://tjkimin2021:playground@playground.ilxoi6j.mongodb.net/play?retryWrites=true&w=majority")
    .then((result) => {
        // console.log(result);
        console.log('데이터베이스 연결 성공');
      app.listen(8081);
    })
    .catch((err) => {
      console.log(err);
    });

module.exports = app;
