import LandingPage from '../landing.page';
import assert from 'assert';
/**
 Stub code, again mostly copied from https://webdriver.io/docs/pageobjects.html
 using as base pattern for rstudio.cloud interactions


 */
class ShinyappsioLandingPage extends LandingPage {

  get footer() { return $('body > footer'); }

  get loginLinkNamedDashboardForSomeReason(){
    return $('#navbar-collapse-1 > ul > li:nth-child(5) > a');
  }



  // open() {
  //   super.open('/');
  //   browser.pause(3000);
  // }

  waitForLandingPageToLoad() {
    // use the footer element being visible as a check for successful page load
    if(!this.footer.isDisplayed()){
      this.footer.waitForDisplayed(10000);
    }
  }

  loginAkaDashboard() {
    this.loginLinkNamedDashboardForSomeReason.click();
  }

  onShinyappsioLandingPage() {
    return browser.getUrl().indexOf('shinyapps.io') > -1;
  }

}
export default new ShinyappsioLandingPage();
