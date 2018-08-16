
const webpack = require('webpack');
const path = require('path');
const project = require('./project.config');

module.exports = {
    entry: {
        vendor: project.vendor
    },

    output: {
        path: path.resolve(project.basePath, '../dll'),
        filename: '[name].[hash:5].dll.js',
        library: '[name]_library'
    },

    plugins: [
        new webpack.DllPlugin({
            name: '[name]_library',
            path: path.resolve(project.basePath, '../dll', 'manifest.json'),
            context: project.basePath
        })
    ]
}
