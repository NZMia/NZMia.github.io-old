const express = require('express');
const webpack = require('webpack');
const httpProxy = require('http-proxy');
const bodyParser = require('body-parser');

const opn = require('opn');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const compress = require('compression');

const webpackConfig = require('../configs/webpack.config');
const compiler = webpack(webpackConfig);
const project = require('../configs/project.config');
const port = project.apiPort;
const host = project.apiHost;

const app = express();

app.use(compress());
app.use(bodyParser.urlencoded({ extended: true }));

const devMiddleware = webpackDevMiddleware(compiler, {
    quiet   : false,
    noInfo  : false,
    lazy    : false,
    headers : {'Access-Control-Allow-Origin': '*'},
    stats   : 'errors-only',
});

const targetUrl = `http://${host}:${port}`;

devMiddleware.waitUntilValid(()=>{
    opn("http://"+ host + ":" + port)
});

const hotMiddleware = webpackHotMiddleware(compiler, {
    path : '/__webpack_hmr',
    log  : false
});


const proxy = httpProxy.createProxyServer({
	target:targetUrl
});

app.use('/api/*',(req,res,err) =>{
	if(err) throw err;
	proxy.web(req,res,{target:targetUrl})
});

app.use(devMiddleware);
app.use(hotMiddleware);
app.use(express.static(project.basePath));

module.exports = {
    app,
	host,
    port
};


const router = express.Router();


router.use(function (req, res, next) {
	console.log('this is request');
	next()
});

router.get('/', function(req, res) {
	res.send('<h1>Hello World</h1>');
});

router.get('/:name', function (req, res) {
	res.send('<h1>Hello ' + req.params.name + '</h1>');
});

router.post('/',function (req, res) {
	var name = req.body.name;
	res.json({message: 'hello' + name});
});

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

app.use('/express', router);
