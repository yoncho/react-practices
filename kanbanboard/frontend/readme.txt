Emaillist: Frontend
1. 설치
    - 개발툴
    $ npm i -D webpack webpack-cli webpack-dev-server css-loader style-loader sass-loader node-sass babel-loader @babel/core @babel/preset-env @babel/preset-react case-sensitive-paths-webpack-plugin
     - 라이브러리
    $ npm i react react-dom prop-types 
2. 설정
    - webpack.config.js
    - babel.config.json
3. 스크립팅
    "scripts": {
        "debug": "npx webpack serve --progress",
        "build": "npx webpack"
    }
4. 테스트 서버 실행
$ npm run debug