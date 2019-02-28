import Page from './page';
import assert from 'assert';
import LandingPage from "./cloudide/landing.page";

export default class LoginPage extends Page {

  logInFromLandingPage() {
    LandingPage.open();
    LandingPage.waitForLandingPageToLoad();

    // ide
    // should just be use login in header
    // these next 2 next lines should be another test
    // LandingPage.findMenuToggleWidgetAndClick();
    // LandingPage.loginViaAccountLink();

    // shiny
    //LandingPage.loginAkaDashboard();

  }

  loginWithUserNamePasswordCombo(userName, passWord) {
    this.userInput.setValue(userName);
    this.passWord.setValue(passWord);
    this.loginButton.click();

  }

}
