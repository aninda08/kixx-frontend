pipeline {
    agent any

    tools {
        nodejs 'node'  // You must configure this in Jenkins: Manage Jenkins > Global Tool Configuration
    }

    stages {
        stage('Checkout Code') {
            steps {
                checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/aninda08/kixx-frontend']])
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm run test:coverage'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('SonarQube Analysis') {
            environment {
                SONARQUBE_TOKEN = credentials('SONARQUBE_TOKEN')
            }
            steps {
                sh 'npm run sonarqube -Dsonar.host.url=${SONARQUBE_URL} -Dsonar.token=${SONARQUBE_TOKEN}'
            }
        }

        // stage('Archive Build Artifacts') {
        //     steps {
        //         archiveArtifacts artifacts: "${BUILD_DIR}/**", fingerprint: true
        //     }
        // }

        stage('Deploy (Optional)') {
            when {
                branch 'main'
            }
            steps {
                echo 'Deploying build to production...'
                // Add your deployment commands here, e.g.:
                // sh 'aws s3 sync build/ s3://your-s3-bucket --delete'
                // sh 'scp -r build/* user@server:/var/www/html'
            }
        }
    }

    post {
        always {
            echo 'Cleaning workspace...'
            cleanWs()
        }
        success {
            echo 'Pipeline completed successfully.'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
