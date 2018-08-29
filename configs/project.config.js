const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    env: NODE_ENV,
    dev_port: '9090',
    basePath: __dirname,
    srcDir: '../src',
    dllDir: '../dll',
    outDir: '../dist',
    publicPath:  NODE_ENV != 'development' ? '../' : `http://localhost:9090/`,
    sourceMap: NODE_ENV == 'development' ? true : false,
    externals  : {},
    vendor: ['react', 'react-dom', 'react-router-dom']
}
