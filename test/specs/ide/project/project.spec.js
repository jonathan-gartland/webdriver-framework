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
      process.env.LOGIN_NAME,
      process.env.PASSWORD
    );

    ProjectPage.validateProjectPageOpened();

    ProjectPage.openNewProject();

    //assert(ProjectPage.iFrameRStudioElement.isDisplayed() === true);

    // todo : args from command

  });

  // it('should be the iframe of the new project', () => {
  //   LoginPage.logInFromLandingPage();
  //   LoginPage.waitForLoginFormToLoad();
  //   LoginPage.verifyPageElementsRenderForLogin();
  //   LoginPage.loginWithUserNamePasswordCombo(
  //     process.env.LOGIN_NAME,
  //     process.env.PASSWORD
  //   );
  //
  //   ProjectPage.validateProjectPageOpened();
  //
  //   ProjectPage.openNewProject();
  //
  //
  //
  // });

});

