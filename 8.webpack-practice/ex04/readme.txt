ex04: css module bundling (loader가 필요!)


1. 패키지 설치
$ npm i -D webpack webpack-cli webpack-dev-server css-loader style-loader

2. 번들링 환경(webpack.config.js) 설정
    - entry
    - output
    - devServer
    - module
            module:{
                rules:[{
                 test: /\.css$/i, 
                 use:['style-loader', 'css-loader']
            }]
    },

3. 스크립팅
"scripts": {
    "start": "npx webpack serve --progress",
    "build": "npx webpack"
}

4. 빌드
$ npm run build

5. 실행
$ npm start