ex05: Component LifeCycle
    - Class Component 
        - Lifecycle I : mount
            1. constructor
            2. getDerivedStateFromProps
            3. render ***
            4. componentDidMount ***
        - Lifecycle II : update
            1. getDerivedStateFromProps
            2. shouldComponentUpdate*
            3. render
            4. getSnapshotBeforeUpdate
            5. componentDidUpdate ***
        - Lifecycle III : unmount
            1. componentWillUnmount() ***

    - Functional Component: alternate(대체) - useEffect
            1. getDerivedStateFromProps 대체 
            2. after rendering (componentDidUpdate 대체)
            3. componentDidMount, componentWillUnmount 
            4. 변경된 상태에 의존적으로 코드 실행이 가능하다.
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