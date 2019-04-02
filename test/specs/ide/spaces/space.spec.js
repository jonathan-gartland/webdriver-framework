import { expect } from 'chai';
import { assert } from 'assert';
import LoginPage from '../../../pageobjects/cloudide/login.page';
import ProjectPage from '../../../pageobjects/cloudide/project.page';



// noinspection Duplicates
describe("Space NAV *TBD* ", () => {

  before( () => {

    LoginPage.logInFromLandingPage();
    LoginPage.waitForLoginFormToLoad();
    LoginPage.verifyPageElementsRenderForLogin();
    LoginPage.loginWithUserNamePasswordCombo(
        process.env.LOGIN_NAME,
        process.env.PASSWORD
    );

    ProjectPage.validateProjectPageOpened();

  });


  it('should be the Workspace Nav on Project Page for the test user', () => {
    ProjectPage.validateSpaceNavIsVisible();
  });


  //  it('should open an inactive space in the list', () => {
  //    ProjectPage.validateSpaceNavIsVisible();
  //    browser.pause(2000); // needed?
  //    ProjectPage.openExistingSpace();
  // });

  it('should create a new space', () => {
    ProjectPage.validateSpaceNavIsVisible();
    browser.pause(2000);  // needed?
    ProjectPage.createNewSpace('AAnewSpace'); // todo: pass as an argument

  });

  it('should delete a space', () => {
    ProjectPage.validateSpaceNavIsVisible();
    //ProjectPage.createNewSpace('AAnewSpace'); // todo: pass as an argument
    ProjectPage.deleteSpace('ZZnewSpace');
  });

});

