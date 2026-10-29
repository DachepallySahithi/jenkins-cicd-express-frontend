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
                sh 'npm ci'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                    cat > ecosystem.config.js <<EOF
module.exports = {
    apps: [{
        name: "express-frontend",
        script: "app.js",
        cwd: "${WORKSPACE}",
        env: {
            PORT: 3000,
            NODE_ENV: "production"
        }
    }]
};
EOF

                    pm2 startOrReload ecosystem.config.js --update-env
                    sleep 2
                    curl --fail http://127.0.0.1:3000/health
                '''
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
