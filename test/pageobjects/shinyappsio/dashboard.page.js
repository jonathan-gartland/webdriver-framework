import Page from '../page';
import assert from 'assert';

/**
 Stub code, again mostly copied from https://webdriver.io/docs/pageobjects.html
 using as base pattern for rstudio.cloud interactions

 */
class DashboardPage extends Page {

  get recentApplications() { return $('#content > section > div > div > div.col-md-8 > section > div.panel-heading > strong'); }
  get footer() { return $('#footer');}


  waitForDashboardPageToLoad() {
    if(!this.recentApplications.isDisplayed()) {
      this.recentApplications.waitForDisplayed(10000);
    }
  }

  validateDashboardPageOpened(){
    return browser.getUrl().indexOf('/dashboard') > -1;

  }
}

export default new DashboardPage();

