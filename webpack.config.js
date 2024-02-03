const path = require('path')
const htmlwebpackplugin = require('html-webpack-plugin')

module.exports = {
    mode: "development",
    entry: {
        path: path.resolve(__dirname, 'src/index.tsx')
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js'
    },
    devServer: { //Servidor de desarrollo local
        port: 3000,
        hot: true,
        liveReload: true,
        static: path.resolve(__dirname, './build/index.html'),
        watchFiles: ['src', 'build']
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader' //Usar babel como compilador
                    }
                ]
                
            },
						{
                test: /\.(scss|css)$/,
                use: ['style-loader','css-loader'] //Para cargar css o bootstrap
            },
						{ //Esta configuracion es nativa de webpack 5 para admitir recursos visuales
                test: /\.(icon|png|jpg|gif|jpeg)$/,
                type: 'asset/resource'
            }
        ]
    },
    resolve: { //Para no tener que especificar la extension de los archivos
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    plugins: [
        new htmlwebpackplugin({ template: path.resolve(__dirname, './src/index.html') })
    ]
}