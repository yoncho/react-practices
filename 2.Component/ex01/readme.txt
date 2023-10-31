ex01: property
    1. Component 작성법
    2. 부모에서 자식으로 전달된다.
        - Component 통신(Data Flow)
        - Top -> Down 방식
    3. 자식에서 변경 불가
    4. 부모가 소유한 데이터

src/01: 함수 컴포넌트
scr/02: 데이터 Flow


==========================================================================================================================
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
        "start": "npx webpack serve --progress --env",
        "build": "npx webpack"
    }
4. 테스트 서버 실행
$ npm run debug src=(01|02|03|...)