import LandingPage from '../landing.page';
import assert from 'assert';
/**
 Stub code, again mostly copied from https://webdriver.io/docs/pageobjects.html
 using as base pattern for rstudio.cloud interactions


 */
class ShinyappsioLandingPage extends LandingPage {


  get loginDashboardLink(){
    return $('#navbar-collapse-1 > ul > li:nth-child(5) > a');
  }

  // better way than calling to super...probably

  waitForLandingPageToLoad() {
    // use the footer element being visible as a check for successful page load
    if(!super.footer.isDisplayed()){
      super.footer.waitForDisplayed(10000);
    }
  }

  loginAkaDashboard() {
    this.loginDashboardLink.click();
  }

}
export default new ShinyappsioLandingPage();
