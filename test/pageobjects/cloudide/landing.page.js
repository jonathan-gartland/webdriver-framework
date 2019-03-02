import LandingPage from '../landing.page';
import Selectors from '../../selectors/ide.js'
import assert from 'assert';
import fs from 'fs';

/**
 Stub code, again mostly copied from https://webdriver.io/docs/pageobjects.html
 using as base pattern for rstudio.cloud interactions


 */
class CloudIdeLandingPage extends LandingPage {

  // first pass - critical elements to get logged in

  //let selectors = JSON.parse(fs.readFileSync('file', 'utf8'));

  //login and sign in links
  // todo : implement tests to validate they work
  get menuLinks() {
    return $('#currentUser > div > div.menuItems > div > a');
    // return $(landingSelectors['menuLinks']);
  }

  // The menuToggler element manages the visibility and focus for
  // the element: css class sidePanel id userPanel
  get menuToggler() {
    return $('#menuToggler');
    //return $(landingSelectors['menuToggler']);
  }

  // following 2 elements are the login and sign in widgets
  // that menuToggler exposes or hides
  get accountLinkLogin() {
    return $('#userPanel > div > div.menu > a.menuItem.login');
  }
  get accountLinkSignup() {
    return $('#userPanel > div > div.menu > a.menuItem.signup');
  }

  // element for page load success check
  get footerWidgetToCheckPageLoad() {
    return $('#footerLogo');
  }

  onLandingPage() {
    return browser.getUrl().indexOf('rstudio.cloud') > -1;
  }

  waitForLandingPageToLoad() {
    // use the footer element being visible as a check for successful page load
    if(!this.footerWidgetToCheckPageLoad.isDisplayed()){
      this.footerWidgetToCheckPageLoad.waitForDisplayed(10000);
    }
  }

  findMenuToggleWidgetAndClick() {
    // toggle the widget to activate the account nav
    this.menuToggler.waitForDisplayed(10000);
    this.menuToggler.click();
    // account nav has been activated check: did it render
    this.accountLinkLogin.waitForDisplayed(15000)

  }

  loginViaAccountLink(){
    // used by login tests, moves user to log in form
    this.accountLinkLogin.click();
  }

  accountNavLinkIsVisible() {
    // return display state of account nav
    return this.accountLinkLogin.isDisplayed() === true;
  }

}

export default new CloudIdeLandingPage();
