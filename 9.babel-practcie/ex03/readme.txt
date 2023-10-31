3. Babel plugin: 변환 규칙
    - 설치
    $ npm i -D @babel/core @babel/cli
    - plugin 설치 및 적용
        block scope 변수 플러그인(@babel/plugin-transform-block-scoping)
            $ npm i -D @babel/plugin-transform-block-scoping
            $ npx babel src/index.js -o ./dist/index.js --plugins @babel/plugin-transform-block-scoping

        객체분해-파라미터 플러그인(@babel/plugin-transform-parameters)
            $ npm i -D @babel/plugin-transform-parameters
            $ npx babel src/index.js -o ./dist/index.js --plugins @babel/plugin-transform-block-scoping --pluginsn @babel/plugin-transform-parameters

        for~of 플러그인(@babel/plugin-transform-for-of)
            $ npm i -D @babel/plugin-transform-for-of
            $ npx babel src/index.js -o ./dist/index3.js --plugins @babel/plugin-transform-block-scoping --plugins @babel/plugin-transform-parameters --plugins @babel/plugin-transform-for-of