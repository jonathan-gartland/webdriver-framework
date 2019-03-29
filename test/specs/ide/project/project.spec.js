import { expect } from 'chai';
import { assert } from 'assert';
import LoginPage from '../../../pageobjects/cloudide/login.page';
import ProjectPage from '../../../pageobjects/cloudide/project.page';



// noinspection Duplicates
describe("Project Page *TBD* ", () => {

  before( () => {

    LoginPage.logInFromLandingPage();
    LoginPage.waitForLoginFormToLoad();
    LoginPage.verifyPageElementsRenderForLogin();
    LoginPage.loginWithUserNamePasswordCombo(
        process.env.LOGIN_NAME,
        process.env.PASSWORD
    );
  });

  // counterintuitively, This is the view for the main workspace space
  // calling it the project 'view' for now until i get a better convention...or not
  it('should be the project page for the test user', () => {
    ProjectPage.validateProjectPageOpened();
  });

   it('should open an existing project', () => {
    ProjectPage.openExistingProject();
   });


  // it('should be a new project for the test user', () => {
  //   ProjectPage.openNewProject();
  // });

  // it('should be the iframe of the new project', () => {

  // });

});

