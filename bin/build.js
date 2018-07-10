const webpack = require('webpack');
const ora = require('ora');
const chalk = require('chalk');
const webpackConfig = require('../configs/webpack.config');

const spinner = new ora('Webpack is compiling ...\n');
spinner.start();

webpack(webpackConfig).run((err, stats) => {
    if (err) {
        throw err;
    } else {
        spinner.stop()
        process.stdout.write(stats.toString({
            colors       : true,
            modules      : false,
            children     : false,
            chunks       : false,
            chunkModules : false
        }) + '\n\n')
        if (stats.hasErrors()) {
            console.log(chalk.black.bgRed('Webpack compiler finished'));
            process.exit(1)
        }
        console.log(chalk.black.bgGreen('Webpack compiler finished successfully！ See ./dist.\n'));
        console.log(chalk.yellow(
            '  Tip: built files are meant to be served over an HTTP server.\n' +
            '  Opening index.html over file:// won\'t work.\n'
        ))
    }
});
