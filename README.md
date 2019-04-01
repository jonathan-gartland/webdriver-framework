# lucid-webdriverio-tests
Project holding related webdriverio code for testing rstudio.cloud and shinyapps.io

### Hosted Apps End to End UI Testing

Pre-requisites to run:  
User has, or can get installed, Node 8.14.0+ and java 8+ on machine tests will be running.
User has checked out test code project (todo use real name).  
Test user has account with valid credentials for test site.  
Navigate into the test code project directory in a terminal.  
Enter the following commands:
    ```$> export LOGIN_NAME=<login>  && export PASSWORD=<password>```
    ```$>npm i```   
    ```$>npm test```   

This runs a simple test to validate we can open the landing page running headless.       
It will report on the command line the status of the tests.  
That's it for now.

Project structure:
I built this out based on the boilerplate mocha-chai example from webdriverio.
https://github.com/amiya-pattnaik/webdriverIO-with-mochaBDD
The documentation for that project will tell you much more than i can here.
Other than the Jenkinsfile that i added to test the jenkins integration with a
browser hosting service (Browserstack), and package-lock.json everything else was part
of the initial download.

test directory:
contains directories: config, pageobjects, reports, selectors, specs, test-data, users

config:
manage the test parameters here, some settings can be overridden on the command line.

pageobjects:
Base page objects for landing and login pages in this directory, plus directories to manage the cloud ide and shinyappsio page objects.

selectors:
Contains json files with detail for selectors for both cloud ide and shinyappsio.

specs:
The files where we describe the tests to be run.

reports:
test results


