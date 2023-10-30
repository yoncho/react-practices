const path = require('path');

module.exports = {
    //설정 파일
    mode: "development",
    entry: path.resolve('src/index.js'),
    output: {
        path:path.resolve('public'),
        filename:"assets/js/bundle.js"
    }
}