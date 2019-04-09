node('docker') {
    wrap([$class: 'AnsiColorBuildWrapper', 'colorMapName': 'XTerm']) {

        stage('Checkout source') {
            checkout scm
        }

        docker.image('node:8.15.0').inside {
        // need java too, might be a default in image, but we should probably
        // just craft a container to use

            withEnv(['HOME=.']) {

                stage('Install requirements') {
                    sh 'npm install -d'
                }
            }

            stage('Run Tests') {
                try {


                    //browserstack('*** <KEY VALUE> ***') {
                    // some block

                    sh 'npm test'   // will run 'test' as defined in Gruntfile.js
                    //}
                } finally {
                    junit '**test/reports/test-results-*.xml'

                    step([$class             : 'CoberturaPublisher',
                          autoUpdateHealth   : false,
                          autoUpdateStability: false,
                          coberturaReportFile: 'coverage/cobertura-coverage.xml',
                          failNoReports      : false,
                          failUnhealthy      : false,
                          failUnstable       : false,
                          maxNumberOfBuilds  : 0,
                          onlyStable         : false,
                          sourceEncoding     : 'ASCII',
                          zoomCoverageChart  : false])
                    //todo : change to appropriate channel when this goes live
                    // most likely <user>, but maybe we use a #<slack channel>
                    // the world is our oyster
                    sendNotifications slack_channel: ''
                    slackSend channel: '@', color: 'good', message: 'Message from Jenkins Pipeline'
                }
            }
        }
    }
}


