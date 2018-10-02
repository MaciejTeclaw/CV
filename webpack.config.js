const path = require('path');

module.exports = {
    entry: ['./js/movement.js', './js/shark.js', './js/cv.js'],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'out.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
            }
        ]
    },
    mode: 'development'
};

