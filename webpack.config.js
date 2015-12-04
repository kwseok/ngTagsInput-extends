const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'ng-tags-input-extends.js',
        minifyFilename: 'ng-tags-input-extends.min.js',
        sourceMapFilename: 'ng-tags-input-extends.js.map',
        libraryTarget: 'umd'
    },
    module: {
        loaders: [
            {
                test: /.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader?optional=runtime'
            },
            {
                test: /\.coffee$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'coffee-loader'
            }
        ]
    },
    externals: {
        angular: 'angular',
        ngTagsInput: {
            root: false,
            commonjs: 'ng-tags-input',
            commonjs2: 'ng-tags-input',
            amd: 'ng-tags-input'
        }
    },
    devtool: '#inline-source-map',
    plugins: [
        new webpack.ProvidePlugin({
            window: __dirname + '/src/vars/window',
            document: __dirname + '/src/vars/document',
            angular: __dirname + '/src/vars/angular'
        })
    ]
};
