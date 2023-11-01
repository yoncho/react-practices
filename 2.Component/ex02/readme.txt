ex02: Component Styling
    - inline styling
    - Normal CSS 
    - CSS Module I    **** 중요
    - CSS Module II   **** 중요
    - SASS & SCSS
    - CSS in JS: Styled Component  **** 편함..!!
    - React Modal
    - Modal: Material UI

==========================================================================================================================
1. 설치
    - 개발툴
    $ npm i -D webpack webpack-cli webpack-dev-server css-loader style-loader sass-loader node-sass babel-loader @babel/core @babel/preset-env @babel/preset-react
    - 라이브러리
    $ npm i react react-dom prop-types
2. 설정
    - webpack.config.js
    - babel.config.json
3. 스크립팅
    "scripts": {
        "start": "npx webpack serve --progress --env",
        "build": "npx webpack"
    }
4. 테스트 서버 실행
$ npm run debug src=(01|02|03|...)