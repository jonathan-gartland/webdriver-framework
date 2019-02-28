import Page from '../page';
import LandingPage from "./landing.page";
import ProjectPage from "./project.page";

/**
 Stub code, again mostly copied from https://webdriver.io/docs/pageobjects.html
 using as base pattern for rstudio.cloud interactions

 */
class LoginPage extends Page {

  // Elements from our login form page
  get userInput() { return $('body > div > div > div > form:nth-child(1) > input[type="email"]:nth-child(2)'); }
  get passWord() { return $('body > div > div > div > form:nth-child(1) > input[type="password"]:nth-child(3)'); }
  get loginButton() { return $('body > div > div > div > form:nth-child(1) > button'); }
  get loginGoogleButton() { return $('#login-form-google'); }
  get loginGithubButton() { return $('#login-form-github'); }
  get forgotPasswordLink() { return $('body > div > div > div > section > p > a:nth-child(1)'); }
  get signUpLink() { return $('body > div > div > div > section > p > a:nth-child(2)'); }
  get termsOfServiceLink() { return $('body > div > div > div > section > div > a'); }
  get copyrightDiv() { return $('#copyright'); }

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
      this.copyrightDiv.waitForDisplayed(5000);

    }
  }

  verifyPageElementsRenderForLogin() {
    if(!this.copyrightDiv.isDisplayed()){
      this.copyrightDiv.waitForDisplayed(5000);
      browser.waitforTimeout(5000);
    }
  }

  loginWithUserNamePasswordCombo(userName, passWord) {
    this.userInput.setValue(userName);
    this.passWord.setValue(passWord);
    this.loginButton.click();

  }

  validateUserLoggedIn() {
    browser.waitforTimeout(5000);
    // todo replace with a wait for element type validation
    ProjectPage.validateProjectPageOpened();

  }

}

export default new LoginPage();
