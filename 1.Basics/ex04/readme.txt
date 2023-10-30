ex04 : application bundling(번들링) 필요!
*webpack : bundling tool
1. webpack은 작게 분리된 많은 application module( js, css, scss/sass, images, font) [frontend를 구성하는 모든 resource] 들을 
    의존성 분석을 하여 하나의 js로 묶는 도구!!
2. 최종 결과물인 하나의 js 파일을 bundle이라 하고 묶는 작업을 bundling이라 한다.
3. 번들링은 단순히 모듈들을 하나의 파일로 묶는 작업을 의미하지 않는다.
4. 빌드 작업(js)
    - linting(ESLint, 문법체크) 작업
    - document(JSDocs) 작업
    - test(Mocha, jest) 작업
    - 난독/압축(uglify) 작업
    - 번들링
5. js 모듈뿐만 아니라 다양한 asset(images, css, sass/scss, font)들도 모듈로 취급한다.
6. 설치
    - $ npm i -D webpack webpack-cli webpack-dev-server css-loader style-loader sass-loader node-sass
7. 설치 확인
    - $ npx webpack --version
8. webpack 설정 (webpack.config.js)
9. scripting(package.json)
10. application 실행(test server 실행)
    - $ npm start
11. application build( bundling)
    - $ npm run build
