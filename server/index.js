const express = require('express');
const webpack = require('webpack');
const httpProxy = require('http-proxy');

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

const devMiddleware = webpackDevMiddleware(compiler, {
    quiet   : false,
    noInfo  : false,
    lazy    : false,
    headers : {'Access-Control-Allow-Origin': '*'},
    stats   : 'errors-only',
});

const targetUrl = `http://localhost:${port}`;
const proxy = httpProxy.createProxyServer({
	target:targetUrl
});

app.use('/api',(req,res)=>{
	proxy.web(req,res,{target:targetUrl})
});

// app.listen(port,(err)=>{
// 	devMiddleware.waitUntilValid(()=>{
// 		// opn("http://localhost:"+ port)
// 		opn("https://NZMia.github.io");
// 	});
// 	console.log(`===>open http://localhost:${port} in a browser to view the app`);
// });

devMiddleware.waitUntilValid(()=>{
    //opn("http://localhost:"+ port)
	opn("https://NZMia.github.io");
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
