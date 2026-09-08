pipeline {

    agent any

    options {
        skipDefaultCheckout(true)
        timestamps()
    }

    environment {
        AWS_ACCOUNT_ID    = "979699864122"
        AWS_DEFAULT_REGION = "ap-south-1"

        IMAGE_REPO_NAME   = "cycling_fedration_india"

        // Use Jenkins build number instead of only "latest"
        IMAGE_TAG         = "${BUILD_NUMBER}"

        REPOSITORY_URI    = "${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_DEFAULT_REGION}.amazonaws.com/${IMAGE_REPO_NAME}"
        IMAGE_NAME        = "${REPOSITORY_URI}:${IMAGE_TAG}"
    }

    stages {

        stage('Checkout Code') {
            steps {
                deleteDir()

                checkout([
                    $class: 'GitSCM',
                    branches: [[name: '*/server_prod_env']],
                    userRemoteConfigs: [[
                        url: 'https://github.com/khelotech/cycling_fedration_india.git'
                    ]]
                ])
            }
        }

        stage('Login to AWS ECR') {
            steps {
                withCredentials([
                    [$class: 'AmazonWebServicesCredentialsBinding',
                     credentialsId: 'aws-cred-usp']
                ]) {
                    sh '''
                        set -e

                        aws sts get-caller-identity

                        aws ecr get-login-password \
                            --region ${AWS_DEFAULT_REGION} | \
                        docker login \
                            --username AWS \
                            --password-stdin ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_DEFAULT_REGION}.amazonaws.com
                    '''
                }
            }
        }

        stage('Create .env File') {
            steps {
                withCredentials([
                    file(
                        credentialsId: 'cycling_fedration_india',
                        variable: 'SECRET_ENV_FILE'
                    )
                ]) {
                    sh '''
                        set -e

                        rm -f .env

                        cp "$SECRET_ENV_FILE" .env

                        chmod 600 .env

                        echo ".env file created successfully"
                    '''
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '''
                    set -e

                    docker build \
                        -t ${IMAGE_REPO_NAME}:${IMAGE_TAG} .
                '''
            }
        }

        stage('Push Docker Image to ECR') {
            steps {
                sh '''
                    set -e

                    docker tag \
                        ${IMAGE_REPO_NAME}:${IMAGE_TAG} \
                        ${IMAGE_NAME}

                    docker push ${IMAGE_NAME}
                '''
            }
        }

        stage('Deploy Container') {
            steps {
                sh '''
                    set -e

                    docker compose down || true

                    docker compose pull

                    docker compose up -d --force-recreate
                '''
            }
        }

        stage('Verify Deployment') {
            steps {
                sh '''
                    set -e

                    docker compose ps

                    echo "Waiting for application..."
                    sleep 10

                    docker compose ps
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

        always {
            sh '''
                rm -f .env || true
            '''
        }
    }
}