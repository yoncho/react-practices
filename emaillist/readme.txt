1. backend
    1) 테스트 (개발 모드)
        elipse ctrl+f11  (Spring Boot Application Run)
    2) 빌드 (배포)
        # mvn -f emaillist/backend exec:exec clean package
    3) 테스트 
        # java -Dspring.profiles.active=production -jar emaillist/backend/target/emaillist.jar
2. frontend