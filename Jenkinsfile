pipeline {
  agent {
    kubernetes {
      yaml '''
        apiVersion: v1
        kind: Pod
        spec:
          containers:
          - name: docker
            image: docker:dind
            command:
            - cat
            tty: true
          - name: node
            image: node:16-alpine3.12
            command:
            - cat
            tty: true
        '''
    }
  }
  stages {
    stage('Run docker') {
      steps {
        container('docker') {
          sh 'docker --version'
        }
        container('node') {
          sh 'npm version'
        }
      }
    }
  }
}
