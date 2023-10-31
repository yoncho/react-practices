ex07 : ex00.cra Reconfiguration (내가 직접 설정)

1. 설치
    - 개발툴
    $ npm i -D webpack webpack-cli webpack-dev-server css-loader style-loader sass-loader node-sass babel-loader @babel/core @babel/preset-env @babel/preset-react
    - 라이브러리
    $ npm i react react-dom
2. 설정
    - webpack.config.js
    - babel.config.json
3. 스크립팅
    "scripts": {
        "start": "npx webpack serve --progress",
        "build": "npx webpack"
    }
4. 테스트 서버 실행
$ npm start
5. 빌드
$ npm run build