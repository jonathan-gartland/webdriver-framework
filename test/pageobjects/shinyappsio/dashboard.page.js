import Page from "../page";
import assert from "assert";
const selectors = require("../../selectors/shinyappsio.json");

/**
 Stub code, again mostly copied from https://webdriver.io/docs/pageobjects.html
 using as base pattern for rstudio.cloud interactions

 */
class DashboardPage extends Page {

  get menuToggle() { return $(selectors.shinyappsIo.dashboardPage.menuToggle); }
  get accountLink() { return $(selectors.shinyappsIo.dashboardPage.accountLink); }
  get applicationsLink() { return $(selectors.shinyappsIo.dashboardPage.applicationsLink); }
  get dashboardLink() { return $(selectors.shinyappsIo.dashboardPage.dashboardLink); }
  get helpLink() { return $(selectors.shinyappsIo.dashboardPage.helpLink); }
  get accountsMenu() { return $(selectors.shinyappsIo.dashboardPage.accountsMenu); }
  get userMenu() { return $(selectors.shinyappsIo.dashboardPage.userMenu); }
  get profileLink() { return $(selectors.shinyappsIo.dashboardPage.profileLink); }
  get tokenLink() { return $(selectors.shinyappsIo.dashboardPage.tokenLink); }
  get logoutLink() { return $(selectors.shinyappsIo.dashboardPage.logoutLink); }
  get showSecretButton() { return $(selectors.shinyappsIo.dashboardPage.showSecretButton); }
  get accountDetailDiv() { return $(selectors.shinyappsIo.dashboardPage.accountDetailDiv); }
  get menuApplicationsLink() { return $(selectors.shinyappsIo.dashboardPage.menuApplicationsLink); }
  get runningApplicationsLink() { return $(selectors.shinyappsIo.dashboardPage.runningApplicationsLink); }
  get sleepingApplicationsLink() { return $(selectors.shinyappsIo.dashboardPage.sleepingApplicationsLink); }
  get archivedApplicationsLink() { return $(selectors.shinyappsIo.dashboardPage.archivedApplicationsLink); }
  get panelHeadingTitle() { return $(selectors.shinyappsIo.dashboardPage.panelHeadingTitle); }



  waitForDashboardPageToLoad() {
    if(!this.helpLink.isDisplayed()) {
      this.helpLink.waitForDisplayed(10000);
    }
  }

  validateDashboardPageOpened(){
    return browser.getUrl().indexOf('/dashboard') > -1;

  }


}

export default new DashboardPage();

