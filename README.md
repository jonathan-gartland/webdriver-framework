# lucid-webdriverio-tests
Project holding related webdriverio code for testing rstudio.cloud and shinyapps.io

###Hosted Apps End to End UI Testing

Pre-requisites to run:  
User has, or can get installed, Node 8.14.0+ and java 8+ on machine tests will be running.
User has checked out test code project (todo use real name).  
Navigate into the test code project directory in a terminal.  
Enter the following commands:
    ```$>npm i .```   
    ```$>npm test .```   

This runs a simple test to validate we can open the landing page running headless.       
It will report on the command line the status of the tests.  
That's it for now.  
