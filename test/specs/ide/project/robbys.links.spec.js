import { expect } from 'chai';
import { assert } from 'assert';
import LoginPage from '../../../pageobjects/cloudide/login.page';
import ProjectPage from '../../../pageobjects/cloudide/project.page';

// noinspection Duplicates
describe("Left Nav Links Mostly ", () => {

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

  afterEach( () => {
    browser.url('/projects');
    browser.pause(5000);
  });


  it('should be on the Guide page after clicking Guide link under Learn', () => {
    ProjectPage.validateLinkWorks(ProjectPage.guideLinkraw, '/learn/guide');
  });

  it('should be on the Whats New page after clicking Whats new link under Learn', () => {
    if (ProjectPage.whatsNewLink.isExisting()) {
      ProjectPage.validateLinkWorks(ProjectPage.whatsNewLink, '/learn/whats-new');
    }
    if (ProjectPage.whatsNewUnreadLink.isExisting()) {
      ProjectPage.validateLinkWorks(ProjectPage.whatsNewUnreadLink, '/learn/whats-new');
    }
  });

  it('should be on the Primers page after clicking Primers link under Learn', () => {
    ProjectPage.validateLinkWorks(ProjectPage.primersLink, '/learn/primers');
  });

  it('should be on the Cheat Sheets page after clicking Cheat Sheets link under Learn', () => {
    ProjectPage.validateLinkWorks(ProjectPage.cheatSheetLink, '/learn/cheat-sheets');
  });

  // this link is different than the rest in this group - it opens a new page in a new tab. It should be tested,
  // but probably with T&Cs and feedback which behave in a more similar manner
  //
  // it('should be on the Feedback page after clicking Feedback link under Learn', () => {
  //   ProjectPage.validateLinkWorks(ProjectPage.feedbackLink, 'https://community.rstudio.com/c/rstudio-cloud');
  //   browser.url('https://rstudio.cloud/projects');
  // });

});