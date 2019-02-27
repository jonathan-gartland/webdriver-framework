import Page from '../page';
import LandingPage from "./landing.page";
import DashboardPage from "./dashboard.page";

/**
 Stub code, again mostly copied from https://webdriver.io/docs/pageobjects.html
 using as base pattern for rstudio.cloud interactions

 */
class LoginPage extends Page {

  // Elements from our login form page
  get userInput() { return $('#content > section > div > div.auth-body > div > div > form > fieldset > div:nth-child(1) > div > input'); }
  get passWord() { return $('#content > section > div > div.auth-body > div > div > form > fieldset > div:nth-child(2) > div > input'); }
  get loginButton() { return $('#content > section > div > div.auth-body > div > div > form > fieldset > div:nth-child(4) > button'); }
  get loginGoogleButton() { return $('#content > section > div > div.auth-body > div > div > a:nth-child(5)'); }
  get loginGithubButton() { return $('#content > section > div > div.auth-body > div > div > a:nth-child(6)'); }
  get forgotPasswordLink() { return $('#content > section > div > div.auth-body > div > div > section > p > a:nth-child(1)'); }
  get signUpLink() { return $('#content > section > div > div.auth-body > div > div > section > p > a:nth-child(3)'); }
  get termsOfServiceLink() { return $('#footer > a:nth-child(2)'); }
  get footer() { return $('#footer'); }

  // Login via username password function
  logInFromLandingPage() {
    //variables for different types of log in
    //email user name, google, github

    LandingPage.open();
    LandingPage.waitForLandingPageToLoad();
    // navigate to landing page and use the log in button
    LandingPage.loginAkaDashboard();

  }

  verifyLogInPageIsLoaded(){
    // probably a better check, just rushing the first iteration
    return this.footer.isDisplayed() === true;
  }

  waitForLoginFormToLoad() {
    this.termsOfServiceLink.waitForDisplayed(10000);
  }

  // verifyPageElementsRenderForLogin() {
  //   if(!this.copyrightDiv.isDisplayed()){
  //     // this.copyrightDiv.waitForDisplayed(5000);
  //     // browser.waitforTimeout(5000);
  //   }
  // }

  loginWithUserNamePasswordCombo(userName, passWord) {

    this.userInput.setValue(userName);
    this.passWord.setValue(passWord);
    this.loginButton.click();


  }

  // ------------------------------------------------------------------------------------------
  // login via google --- maybe not automated ---
  // login via github --- same ---
  // the 2 logins via authing through another service -
  // if they stop working in our automated tests - is it us? is it the service?
  // consider what these test should be telling us before simply implementing functionality
  // because we can
  // automation isn't about writing code just because we can.
}

export default new LoginPage();

