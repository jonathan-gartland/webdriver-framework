import { expect } from 'chai';
import { assert } from 'assert';
import LoginPage from '../../../pageobjects/cloudide/login.page';
import ProjectPage from '../../../pageobjects/cloudide/project.page';



describe('Project page', () => {

  it('should be the project page for the test user', () => {
    LoginPage.logInFromLandingPage();
    LoginPage.waitForLoginFormToLoad();
    LoginPage.verifyPageElementsRenderForLogin();
    LoginPage.loginWithUserNamePasswordCombo(
      'connect-qa+10000@rstudio.com',
      'rsctest99'
    );

    ProjectPage.validateProjectPageOpened();


    // todo : args from command

  });

  it('should let th euser open a project', () => {

    // for these tests we want to do this once in a hook before the test starts
    // for now just getting something in place
    // this is a redundant test as it is the confirmation that the user
    // has logged in successfully from the login page

    LoginPage.logInFromLandingPage();
    LoginPage.waitForLoginFormToLoad();
    LoginPage.verifyPageElementsRenderForLogin();
    LoginPage.loginWithUserNamePasswordCombo(
      'connect-qa+10000@rstudio.com',
      'rsctest99'
    );

    ProjectPage.validateProjectPageOpened();




    // todo : args from command

  });
});
