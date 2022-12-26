pipeline {
    agent any
    stages {
        stage('Hello') {
            steps {
                echo 'hello world' >> hello.txt
                cat hello.txt
                docker --version
            }
        }
    }
}
