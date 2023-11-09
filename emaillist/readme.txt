1. backend
    1) 테스트 (개발 모드)
        elipse ctrl+f11  (Spring Boot Application Run)
    2) 빌드 (배포)
        # mvn -f emaillist/backend exec:exec clean package
    3) 빌드 (서버 배포) 테스트
        # java -Dspring.profiles.active=production -jar emaillist/backend/target/emaillist.jar
    

2. frontend

3-1. deploy : 연결 (secure shell key 인증) 
    1). key 생성하기
        # ssh-keygen -t rsa -b 2048 -m PEM -C "joyonghyeon13@gmail.com"
    2). key 생성 확인
    - private key (개인키) : ~/.ssh/id_rsa
    - public key (공개) : ~/.ssh/id_rsa.pub
    3). 공개키를 서버에 설치하기
        # mv ~/.ssh/id_rsa.pub ~/.ssh/authorized_keys
    4). private key 잘 저장하기

    5). 접속 테스트
        # ssh -i mykey.pem root@192.168.0.181
    6). 접속 환경 설정
        1). ~/.ssh/environment
        ======
        PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/usr/local/poscodx2023/java/bin:/usr/local/poscodx2023/git/bin:/usr/local/poscodx2023/maven/bin:/usr/local/poscodx2023/mariadb/bin:/root/bin
        ======
        2). /etc/ssh/sshd_config
        =====
        PermitUserEnvironment yes
        
        =====


3-2. deploy: Publish Over SSH 플러그인(Jenkins)
    1) Publish Over SSH 플러그인 설치
    2) Dashboard > Jenkins 관리 > System > Public Over SSH
        - 서비스 실행 서버 (ssh server) 등록 작업 : springboot-publish-server/ 고급 설정 > mykey.pem 내용 
        - 프로젝트의 빌드 후 조치(post-build action)의 Send build artifacts over SSH 설정
            (1) emaillist.jar: transfer
            (2) launch.sh: transfer + execution