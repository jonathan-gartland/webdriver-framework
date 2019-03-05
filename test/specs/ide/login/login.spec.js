


/*
  String googleUser1_username = "connect-qa@rstudio.com";
	String googleUser1_password = "rsctest99";
 */

import { expect } from 'chai';
import { assert } from 'assert';
import LoginPage from '../../../pageobjects/cloudide/login.page';
import ProjectPage from '../../../pageobjects/cloudide/project.page';



describe('login form logging in', () => {

  it('should allow access with correct credentials', () => {
    LoginPage.logInFromLandingPage();
    LoginPage.waitForLoginFormToLoad();
    LoginPage.verifyPageElementsRenderForLogin();
    LoginPage.loginWithUserNamePasswordCombo(
      process.env.LOGIN_NAME,
      process.env.PASSWORD
    );

    ProjectPage.validateProjectPageOpened();


    // todo : args from command

  });
});
