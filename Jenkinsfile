pipeline {
    agent any

    stages {
        
        stage('Remove Artifacts') {
            steps {
                catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                    sh "docker rm --force etch-app"
                }
            }
        }
        
        stage('Build active containers website image') {
            environment {
                my_docker_pass = credentials('DOCKER_PASS')
            }
            steps {
                sh 'docker build --tag etch-app .'
                sh 'docker tag flask-app:latest maiale/repo:etch-app'
                sh 'echo $my_docker_pass | docker login --username maiale --password-stdin'
                sh 'docker push maiale/repo:etch-app'
            }
        }
        
         stage('Deploy active containers website') {
             steps {
                 sh 'docker run -d -p 5000:5000 --name etch-app maiale/repo:etch-app'
             }
         }
        
    }
}
