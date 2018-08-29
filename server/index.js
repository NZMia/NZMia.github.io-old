const express = require('express');
const webpack = require('webpack');
const mysql = require('mysql');

const opn = require('opn');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const compress = require('compression');

const webpackConfig = require('../configs/webpack.config');
const compiler = webpack(webpackConfig);
const project = require('../configs/project.config');
const port = project.dev_port;

const app = express();

app.use(compress());

// const connection = mysql.createConnection({
//  host     : 'localhost',
//  user     : 'admin',
//  password : '',
//  database : 'NZMia'
// });
//
// connection.connect();

const devMiddleware = webpackDevMiddleware(compiler, {
    quiet   : false,
    noInfo  : false,
    lazy    : false,
    headers : {'Access-Control-Allow-Origin': '*'},
    stats   : 'errors-only',
});

devMiddleware.waitUntilValid(()=>{
    opn("http://localhost:"+ port)
});

const hotMiddleware = webpackHotMiddleware(compiler, {
    path : '/__webpack_hmr',
    log  : false
});

app.use(devMiddleware);
app.use(hotMiddleware);
app.use(express.static(project.basePath));

module.exports = {
    app,
    port
}
