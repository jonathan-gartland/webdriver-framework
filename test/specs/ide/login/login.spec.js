


/*
  String googleUser1_username = "connect-qa@rstudio.com";
	String googleUser1_password = "rsctest99";
 */

import { expect } from 'chai';
import { assert } from 'assert';
import LoginPage from '../../../pageobjects/cloudide/login.page';
import ProjectPage from '../../../pageobjects/cloudide/project.page';
import AccountPopUpPage from "../../../pageobjects/cloudide/account.select.popup.page.js";



describe('login form logging in', () => {

  it('should allow access with correct credentials', () => {
    LoginPage.logInFromLandingPage();
    LoginPage.waitForLoginFormToLoad();
    LoginPage.verifyPageElementsRenderForLogin();
    LoginPage.loginWithUserNamePasswordCombo(
      process.env.LOGIN_NAME,
      process.env.PASSWORD
    );


    // if(AccountPopUpPage.popUpIsOpen()){
    //   console.log('placeholder for info');
    // }


    ProjectPage.validateProjectPageOpened();


    // todo : args from command

  });
});
