const path = require('path')

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', 'jsx'],
    },
    module: {
        rules: [  //Array de regras
            {
                test: /\.jsx$/, //Importando arquivo.jsx
                exclude: /node_modules/,
                use: 'babel-loader',// Converter arquivo pra que o navegador entenda
            }
        ],
    }
}