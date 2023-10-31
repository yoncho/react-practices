4. Env Preset: 변화 규칙 모음

    - preset?
        여러 플러그인 변환 규칙을 한번에 적용하기 위해서 관련 플러그인을 모아 놓은 것
        종류
            - ECMAPScript 년도 별로 모아 놓은 것
            - ECMAScript stage (level 0, 1, 2, 3)
            - 3rd party : TypeScript, JSX
            등 다양함...!
        ECMAScript Preset은 Env Preset(preset-env, ECMAScript level 3)이다.
        
    - 설치
    $ npm i -D @babel/core @babel/cli @babel/preset-env
    - 설치 확인
    $ npm list --depth=1

    - Env Preset 설정
        타켓 브라우저 설정하는 방식
        브라우저별 ex6 호환성 테이블 (https://compat-table.github.io/compat-table/es6/)
    
    - 변환하기
    $ npx babel src/index.js -o ./dist/index.js