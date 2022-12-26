pipeline {
  agent any
  
  tools {nodejs "node"}
  
  stages {
    stage('building docker image') {
      steps {
        sh 'docker build -t maia/etch .'
      }
    }
  }
}
