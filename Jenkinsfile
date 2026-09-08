pipeline {

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

                checkout([
                    $class: 'GitSCM',

                    branches: [[
                        name: '*/server_prod_env'
                    ]],

                    userRemoteConfigs: [[
                        url: 'https://github.com/khelotech/cycling_fedration_india.git'
                    ]]
                ])
            }
        }


        stage('Login to AWS ECR') {
            steps {

                sh '''
                    set -e

                    echo "Checking AWS identity..."

                    aws sts get-caller-identity

                    echo "Logging into AWS ECR..."

                    aws ecr get-login-password \
                        --region ${AWS_DEFAULT_REGION} | \
                    docker login \
                        --username AWS \
                        --password-stdin \
                        ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_DEFAULT_REGION}.amazonaws.com

                    echo "ECR login successful."
                '''
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

                        echo "Removing old .env..."

                        rm -f .env

                        echo "Creating new .env..."

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

                    echo "Building Docker image..."

                    docker build \
                        --no-cache \
                        -t ${IMAGE_REPO_NAME}:${IMAGE_TAG} .

                    echo "Docker build completed."
                '''
            }
        }


        stage('Push Docker Image to ECR') {
            steps {

                sh '''
                    set -e

                    echo "Tagging Docker image..."

                    docker tag \
                        ${IMAGE_REPO_NAME}:${IMAGE_TAG} \
                        ${IMAGE_NAME}

                    echo "Pushing image to ECR..."

                    docker push ${IMAGE_NAME}

                    echo "Docker image pushed successfully."
                '''
            }
        }


        stage('Deploy Container') {
            steps {

                sh '''
                    set -e

                    echo "Stopping old containers..."

                    docker-compose down || true

                    echo "Pulling latest image..."

                    docker-compose pull

                    echo "Starting containers..."

                    docker-compose up -d --force-recreate

                    echo "Deployment completed."
                '''
            }
        }


        stage('Cleanup') {
            steps {

                sh '''
                    echo "Cleaning unused Docker images..."

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