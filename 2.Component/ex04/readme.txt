ex04: State
    - 기본 개념 
    - 제어 컴포넌트
    - 상태 컴포넌트 vs 순수(pure, dumb) 컴포넌트
    - data flow: bottom -> top

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