import LandingPage from '../landing.page';
import cloudIde from '../../selectors/ide.json'
import assert from 'assert';
import fs from 'fs';
const selectors = require('../../selectors/ide.json');

/**
 Stub code, again mostly copied from https://webdriver.io/docs/pageobjects.html
 using as base pattern for rstudio.cloud interactions


 */
class CloudIdeLandingPage extends LandingPage {

  // first pass - critical elements to get logged in
  /*
  dynamically set these up? would help speed up development
  adding features.


  for _ in cloudIde.landingPageSelectors {
    get _() { return $(selectors.cloudIde.landingPageSelectors._); }
  }

  "landingPageSelectors": {
      "menuLinks": "'#currentUser > div > div.menuItems > div > a'",
      "menuToggler": "'#menuToggler'",
      "accountNavLogin": "'#userPanel > div > div.menu > a.menuItem.login'",
      "accountNavSignup": "'#userPanel > div > div.menu > a.menuItem.signup'",
      "footerLogo": "'#footerLogo'"
    },

   */

  // login and sign in links --------------------------------------------------
  // todo : implement tests to validate they work
  get menuLinks() { return $(selectors.cloudIde.landingPage.menuLinks); }
  // The menuToggler element manages the visibility and focus for
  // the element: css class sidePanel id userPanel
  get menuToggler() { return $(selectors.cloudIde.landingPage.menuToggler); }
  // following 2 elements are the login and sign in widgets
  // that menuToggler exposes or hides
  get accountLinkLogin() { return $(selectors.cloudIde.landingPage.accountNavLogin); }
  get accountLinkSignup() { return $(selectors.cloudIde.landingPage.accountNavSignup); }
  // element for page load success check
  get footerWidgetToCheckPageLoad() { return $(selectors.cloudIde.landingPage.footerLogo); }
  //
  // --------------------------------------------------------------------------

  // return if we are on landing page, verify by url substring
  onLandingPage() { return browser.getUrl().indexOf('rstudio.cloud') > -1; }

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
