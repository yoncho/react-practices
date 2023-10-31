1. babel core library  
    - 변환(transpile) 규칙을 소스에 적용해서 변환된 소스를 생성
    - 코어 라이브러리 자체는 변환 규칙을 가지고 있지 않다.
    - 변환 규칙은 플러그인(plugin) 또는 프리셋(freset) 가지고 있고 Babel 설정을 통해 적용한다.
    - 설치
    $ npm i -D @babel/core