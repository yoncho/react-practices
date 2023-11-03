ex04: State
    - 기본 개념
        this.state 안에 여러 데이터를 가질 수 있음.
        함수 컴포넌트의경우 useState 훅(hook)을 사용! 초기화 const[val,setVal] = useState(begin) 과 
        같이 val는 데이터/ setVal는val의 상태(값)을 컨트롤하는 함수! 
    - 제어 컴포넌트 : 사용자 입력을 제어할 수 있음..!!
    - 비제어 컴포넌트
    - 상태 컴포넌트 vs 순수(pure, dumb) 컴포넌트 : 
        상태 컴포넌트 : 컴포넌트 계층의 상위에 있음, 순수 컴포넌트 하나 이상 래핑
        / 순수 컴포넌트 : 상태 없이 속성(props)로 홤녀 렌더링
    - data flow: bottom -> top
        예제) emaillist

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