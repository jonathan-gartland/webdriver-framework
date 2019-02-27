


/*
  String googleUser1_username = "connect-qa@rstudio.com";
	String googleUser1_password = "rsctest99";
 */

//import { expect } from 'chai';
import LoginPage from '../../../pageobjects/ide/login.page';


describe('login form', () => {

  it('should allow access with correct credentials', () => {
    LoginPage.logInFromLandingPage();
    LoginPage.waitForLoginFormToLoad();
    LoginPage.verifyPageElementsRenderForLogin();
    LoginPage.loginWithUserNamePasswordCombo(
      'connect-qa+10000@rstudio.com',
      'rsctest99'
    );
    // todo : args from command

  });
});
