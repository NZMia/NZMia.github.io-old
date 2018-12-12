const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();

const tagRouter = require('./api/tag');
const meRouter = require('./api/me');

app.use(cookieParser());
app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/tag', tagRouter);
app.use('/me', meRouter);

app.listen(9091, function () {
    console.log('this port listening 9091');
});
