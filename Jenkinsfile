pipeline {
    // agent {
    //     label 'atom-dev'
    // }
    agent any

    options {
        skipDefaultCheckout(true)
    }

    environment {
        AWS_ACCOUNT_ID = "979699864122"
        AWS_DEFAULT_REGION = "ap-south-1"

        IMAGE_REPO_NAME = "cycling_fedration_india"
        IMAGE_TAG = "latest"

        REPOSITORY_URI = "${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_DEFAULT_REGION}.amazonaws.com/${IMAGE_REPO_NAME}"
        IMAGE_NAME = "${REPOSITORY_URI}:${IMAGE_TAG}"
    }

    stages {

        stage('Checkout Code') {
            steps {
                checkout([$class: 'GitSCM',
                    branches: [[name: '*/server_prod_env']],
                    userRemoteConfigs: [[
                        credentialsId: 'd10ac3f1-efba-4a5e-84f7-4537979f9093',
                        url: 'https://github.com/khelotech/cycling_fedration_india.git'
                    ]]
                ])
            }
        }

        stage('Login to AWS ECR') {
            steps {
                withCredentials([[
                    $class: 'AmazonWebServicesCredentialsBinding',
                    credentialsId: 'aws-cred-usp'
                ]]) {
                    sh '''
                        aws ecr get-login-password --region ${AWS_DEFAULT_REGION} | \
                        docker login --username AWS --password-stdin ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_DEFAULT_REGION}.amazonaws.com
                    '''
                }
            }
        }

        stage('Create .env File') {
            steps {
                withCredentials([file(credentialsId: 'cycling_fedration_india', variable: 'SECRET_ENV_FILE')]) {
                    sh '''
                        echo "Removing old .env..."
                        rm -f .env

                        echo "Creating new .env..."
                        cat "$SECRET_ENV_FILE" > .env

                        chmod 600 .env
                    '''
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '''
                    docker build --no-cache \
                    -t ${IMAGE_REPO_NAME}:${IMAGE_TAG} .
                '''
            }
        }

        stage('Push Docker Image to ECR') {
            steps {
                sh '''
                    docker tag ${IMAGE_REPO_NAME}:${IMAGE_TAG} ${IMAGE_NAME}
                    docker push ${IMAGE_NAME}
                '''
            }
        }

        stage('Deploy Container') {
            steps {
                sh '''
                    docker-compose down || true
                    docker-compose pull
                    docker-compose up -d --force-recreate
                '''
            }
        }

        stage('Cleanup') {
            steps {
                sh '''
                    docker image prune -af
                '''
            }
        }
    }

    post {
        success {
            echo 'Deployment completed successfully.'
        }

        failure {
            echo 'Deployment failed.'
        }
    }
}