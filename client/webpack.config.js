const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'production',
    entry: './src/script.js',
    output: {
        path: path.resolve(__dirname, '../public'),
        filename: 'main.js',
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, '../public'),
            port: 3000,
            open: true,
            hot: true,
            compress: true,
            historyApiFallback: true,
            proxy: {
                '/api' : 'http://localhost:5000',
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif|jpg|ico)$/i,
                use: [
                    {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'images/',
                        publicPath: 'images/'
                    }
                    }
                    ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack App',
            filename: 'index.html',
            template: './src/index.html'
        })
    ]
}