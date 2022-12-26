pipeline {
  agent any

  stages {
    stage('Cloning Git') {
      steps {
        git 'https://github.com/maialele/Etch-a-Sketch.git'
      }
    }     
    stage('Docker Build') {
    	agent any
      steps 
      {
      	sh 'docker build -t maia/etch .'
      }
    }
  }
}
