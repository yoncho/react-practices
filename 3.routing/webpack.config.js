const path = require('path');

module.exports = function(env){
    return {
        //설정 파일
        mode: "development",
        entry: path.resolve(`src/${env.src}/index.js`),
        output: {
            path:path.resolve('public'),
            filename:"assets/js/main.js",
            assetModuleFilename: 'assets/images/[hash][ext]'
        },
        module:{
            rules:[{
                test: /.js/i, 
                exclude:/node_modules/,
                use:'babel-loader'
            },{
                test: /\.(c|sc|sa)ss$/i, 
                use:[
                    'style-loader', 
                    {
                        loader: 'css-loader', 
                        options: {
                            modules: env['css-module'] !== 'false'
                        }
                    },
                    'sass-loader'
                ]
            },{
                test: /\.(svg|png|gif|jp?eg|ico|tif?f|bmp)$/i,
                type: 'asset/resource'
            }]
        },
        devServer: {
            host: '0.0.0.0',
            port: '9090',
            liveReload: true,
            compress: true,
            hot: false,
            historyApiFallback: true
        }
    }
}