React Practices - Routing

ex01: React Router Basic I: Implemented in a Simple Way(hashchange event driven)
ex02: React Router Basic II: HTML5 history API
ex03: React Router Basic III: HashRouter & BrowserRouter
ex04: React Router Basic V: Link VS NavLink
ex05: Styling & Semantic Markup
ex06: Composition       ({children})
ex07: useRoute          (Hooks)
ex08: Nesting Routes    (<Outlet/>)


Install Dependency
1. react-router: 6.0.x(2021.6 beta)
2. react-router-dom: 6.0.x(2021.6 beta)

=================================

1. 설치
    - 개발툴
    $ npm i -D webpack webpack-cli webpack-dev-server css-loader style-loader sass-loader node-sass babel-loader @babel/core @babel/preset-env @babel/preset-react case-sensitive-paths-webpack-plugin @babel/plugin-transform-runtime @babel/plugin-syntax-throw-expressions
     - 라이브러리
    $ npm i react react-dom prop-types react-addons-update styled-components react-router react-router-dom

2. 설정
    - webpack.config.js
    - babel.config.json

3. 스크립팅
    "scripts": {
        "debug": "npx webpack serve --progress --env",
        "build": "npx webpack"
    }
4. 테스트 서버 실행
$ npm run debug src=(01|02|03|04|05|06)
