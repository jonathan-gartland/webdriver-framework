import Page from '../page';
import LandingPage from "./landing.page";
import ProjectPage from "./project.page";
const selectors = require('../../selectors/ide.json');


/**
 Stub code, again mostly copied from https://webdriver.io/docs/pageobjects.html
 using as base pattern for rstudio.cloud interactions

 */
class LoginPage extends Page {

  // Elements from our login form page
  get userInput() { return  $(selectors.cloudIde.loginPage.userInput); }
  get passWord() { return $(selectors.cloudIde.loginPage.passWord); }
  get loginButton() { return $(selectors.cloudIde.loginPage.loginButton); }
  get loginGoogleButton() { return $(selectors.cloudIde.loginPage.loginGoogleButton); }
  get loginGithubButton() { return $(selectors.cloudIde.loginPage.loginGithubButton); }
  get forgotPasswordLink() { return $(selectors.cloudIde.loginPage.forgotPasswordLink); }
  get signUpLink() { return $(selectors.cloudIde.loginPage.signUpLink); }
  get termsOfServiceLink() { return $(selectors.cloudIde.loginPage.termsOfServiceLink); }
  get copyrightDiv() { return $(selectors.cloudIde.loginPage.copyrightDiv); }

  // Login via username password function
  logInFromLandingPage() {
    LandingPage.open();
    LandingPage.waitForLandingPageToLoad();
    LandingPage.findMenuToggleWidgetAndClick();
    LandingPage.loginViaAccountLink();

  }

  // wait to implement github or google log in. not critical to our regression testing as
  // those functions get tested by us every day when we are validatiing changes on staging
  // or prod. good to consider for later as we build out coverage.

  waitForLoginFormToLoad() {
    if(!this.copyrightDiv.isDisplayed()){
      this.copyrightDiv.waitForDisplayed(10000);

    }
  }

  verifyPageElementsRenderForLogin() {
    if(!this.copyrightDiv.isDisplayed()){
      this.copyrightDiv.waitForDisplayed(10000);

    }
  }

  loginWithUserNamePasswordCombo(userName, passWord) {
    this.userInput.setValue(userName);
    this.passWord.setValue(passWord);
    this.loginButton.click();

  }

  validateUserLoggedIn() {
    // todo replace with a wait for element type validation
    ProjectPage.validateProjectPageOpened();

  }

}

export default new LoginPage();
