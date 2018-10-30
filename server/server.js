const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();

const userRouter = require('./api/user');
const tagRouter = require('./api/tag');

app.use(cookieParser());
app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/user', userRouter);
app.use('/tag', tagRouter);

app.listen(9091, function () {
    console.log('this port listening 9091');
});
