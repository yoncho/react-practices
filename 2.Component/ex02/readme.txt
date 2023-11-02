ex02: Component Styling
    - inline styling
    - Normal CSS 
        : css-loader option:{module: false}  기본값
          실행
          $ npm run debug scr=03 css-module=false

    - CSS Module I    **** 중요
        : css-loader option:{module: true}  
          실행
          npm run debug scr=03

    - CSS Module II   **** 중요
        : css-loader option:{module: true}  
          실행
          npm run debug scr=04

    - SASS & SCSS
        : css-loader option:{module: true}  
          실행
          npm run debug scr=05
    - CSS in JS: Styled Component, Less & Styleable  **** 편함..!!
        $ npm i styled-components
        css-loader option: {module: true}
        실행
        $ npm run debug src=06
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