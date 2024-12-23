const path = require('path');
const sampleui_version = `${require('./scripts/adminQuotation/.version.json').version}`;
const HtmlWebpackPlugin = require('html-webpack-plugin');
var sampleuiapp = {
    mode: 'production',
    entry: {
        'main': './wwwroot/scripts/src/app/app.main.js',
        'polyfills': 'zone.js'
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all',
                },
            },
        },
    },
    output: {
        path: path.resolve(__dirname, './wwwroot/scripts/dist/app/adminquote'),
        filename: `[name].${sampleui_version}.js` //'[name].bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './scripts/adminQuotation/templates/index.html'
        })
    ]
};

module.exports = [sampleuiapp];