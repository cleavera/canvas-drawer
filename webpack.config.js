module.exports = {
    entry: './example/src/index.ts',
    output: {
        filename: 'index.js',
        path: './example'
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    module: {
        loaders: [
            { test: /\.ts?$/, loader: 'ts-loader?' + JSON.stringify({
                configFileName: './example/tsconfig.json'
            }) }
        ]
    }
};