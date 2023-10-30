const path = require('path');

module.exports = {
    //설정 파일
    mode: "development",
    entry: path.resolve('src/index.js'),
    output: {
        path:path.resolve('public'),
        filename:"assets/js/bundle.js"
    },
    module:{
        rules:[{
            test: /\.(c|sc|sa)ss$/i, 
            use:['style-loader', 'css-loader','sass-loader']
        }]
    },
    devServer: {
        host: '0.0.0.0',
        port: '9090',
        liveReload: true,
        compress: true,
        hot: false
    }
}