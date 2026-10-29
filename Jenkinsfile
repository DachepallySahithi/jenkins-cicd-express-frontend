pipeline {
    agent any

    options {
        timestamps()
        disableConcurrentBuilds()
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Test') {
            steps {
                bat 'npm test'
            }
        }

        stage('Package') {
            steps {
                echo 'Express tests passed. Application is ready for deployment.'
            }
        }
    }

    post {
        success {
            echo 'Express pipeline completed successfully!'
        }
        failure {
            echo 'Express pipeline failed. Check the console output.'
        }
    }
}