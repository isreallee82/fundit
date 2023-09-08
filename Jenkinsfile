pipeline {
  agent any
  stages {
    stage('check-Script') {
      steps {
        git(url: 'https://github.com/isreallee82/fundit', branch: 'main')
      }
    }

  }
  pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from the Git repository
                script {
                    checkout scm
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install project dependencies using Yarn
                sh 'yarn install'
            }
        }

        stage('Build') {
            when {
                // Build for master and development branches
                expression {
                    currentBuild.branchName == 'master' || currentBuild.branchName == 'development'
                }
            }
            steps {
                // Execute your build commands using Yarn
                sh 'yarn build'
            }
        }

        stage('Test') {
            when {
                // Run tests for master, development, and feature branches
                expression {
                    currentBuild.branchName == 'master' || currentBuild.branchName == 'development' || currentBuild.branchName.startsWith('feature-branch/')
                }
            }
            steps {
                // Execute your test commands using Yarn
                sh 'yarn test'
            }
        }

        stage('Deploy') {
            when {
                // Deploy for master and development branches
                expression {
                    currentBuild.branchName == 'master' || currentBuild.branchName == 'development'
                }
            }
            steps {
                // Deploy your application to the production or staging environment using Yarn
                sh 'yarn deploy'
            }
        }
    }
}

}