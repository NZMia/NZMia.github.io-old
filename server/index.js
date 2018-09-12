const express = require('express');
const webpack = require('webpack');
const path = require('path');
const httpProxy = require('http-proxy');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const opn = require('opn');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const compress = require('compression');

const webpackConfig = require('../configs/webpack.config');
const compiler = webpack(webpackConfig);
const project = require('../configs/project.config');
const port = project.apiPort;
const host = project.apiHost;

const devMiddleware = webpackDevMiddleware(compiler, {
    quiet   : false,
    noInfo  : false,
    lazy    : false,
    headers : {'Access-Control-Allow-Origin': '*'},
    stats   : 'errors-only',
});

const targetUrl = `http://${host}:${port}`;

const hotMiddleware = webpackHotMiddleware(compiler, {
    path : '/__webpack_hmr',
    log  : false
});

const proxy = httpProxy.createProxyServer({
	target:targetUrl
});

const router = express.Router();
const app = express();

app.use(compress());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(devMiddleware);
app.use(hotMiddleware);
app.use(express.static(project.outDir));

app.use('*',(req,res,next) =>{

	const filename = path.join(project.outDir, 'index.html');

	compiler.outputFileSystem.readFile(filename, (err, result) => {
		if (err) {
			return next(err);
		}
		res.set("content-type", "text/html");
		res.send(result);
		res.end();
	});
	//proxy.web(req,res,{target:targetUrl})
});

// devMiddleware.waitUntilValid(()=>{
// 	opn("http://localhost:"+ port);
// });


app.get('/tesss', function (req, res) {
	res.send('Hello World!')
});

app.get('/dev', function (req, res) {
	res.send('Hello, you are now on the Dev route!');
});

module.exports = {
    app,
	host,
    port
};


// mongoClient.connect(dbURL).then(client => {
//
// 	const db = client.db('blog');
//
// 	// db.collection('test').insertOne({
// 	// 	eId: 1,
// 	// 	eName: 'Mia'
// 	// });
//
// 	console.log('connected successfully');
//
// 	client.close();
//
// }).catch(err => {
//
// 	console.log('error connecting to mongodb', err);
// });

// app.use('/express', router);
