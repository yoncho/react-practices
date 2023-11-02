ex03: React Event
    - inline handler
    - function handler
    - synthetic event 객체 (DOM Event 합성)
    - event handler  예제
    - ref 사용하기: function component
    - ref 사용하기: class component

==========================================================================================================================
1. 설치
    - 개발툴
    $ npm i -D webpack webpack-cli webpack-dev-server css-loader style-loader sass-loader node-sass babel-loader @babel/core @babel/preset-env @babel/preset-react
    - 라이브러리
    $ npm i react react-dom prop-types styled-components
2. 설정
    - webpack.config.js
    - babel.config.json
3. 스크립팅
    "scripts": {
        "debug": "npx webpack serve --progress --env",
        "build": "npx webpack"
    }
4. 테스트 서버 실행
$ npm run debug src=(01|02|03|...)