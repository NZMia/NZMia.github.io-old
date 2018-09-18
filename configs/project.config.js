
const env = process.env;
const NODE_ENV = env.NODE_ENV || 'development';

module.exports = {
    env: NODE_ENV,

	apiHost: env.APIHOST || 'localhost',
	apiPort: env.APIPORT || '9090',
	dbHost: 'root',

	dev_port: env.PORT || (NODE_ENV === 'production' ? 9090 : '../'),
    basePath: __dirname,
    srcDir: '../src',
    dllDir: '../dll',
    outDir: '../dist',
    publicPath:  NODE_ENV != 'development' ? '../' : `http://localhost:9090/`,
	assetsPublicPath: '',
    sourceMap: NODE_ENV == 'development' ? true : false,
    externals  : {},
    vendor: ['react', 'react-dom', 'react-router-dom', 'redux', 'react-redux', 'redux-thunk']
};
