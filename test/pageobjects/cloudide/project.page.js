import Page from "../page";
import assert from "assert";
const selectors = require("../../selectors/ide.json");
/**
 Stub code, again mostly copied from https://webdriver.io/docs/pageobjects.html
 using as base pattern for rstudio.cloud interactions

 */
class ProjectPage extends Page {

  // right nav elements, space menu, ....
  // might get broken out into it's own object - try to think nimbly
  // this probably the space 'page' at the end of the day
  get spaceNavToggler() { return $(selectors.cloudIde.projectPage.spaceNavToggler); }
  // similar to above
  get yourProjects() { return $(selectors.cloudIde.projectPage.yourProjects); }
  get newProjectButton() { return $(selectors.cloudIde.projectPage.newProjectButton); }

  get accountSelectPopUp() { return $(selectors.cloudIde.accountPopUp.modalDialog); }
  get accountFieldToSelect() { return $(selectors.cloudIde.accountPopUp.accountFromList); }
  get accountSelectButton() { return $(selectors.cloudIde.accountPopUp.submitButton); }
  get systemStatus() { return $(selectors.cloudIde.projectPage.systemStatus); }

  get iFrame() { return $('#rstudio'); }

  get iFrameRStudioElement() { return $('#rstudio_console_output'); }

  //get ideConsole() { return $(selectors.cloudIde.projectPage.rstudioConsole); }

  // message while waiting: #contentContainer > div > div

  // content ~= project page object in this case, opening the project
  // will be an ide/iframe page object

  openNewProject() {
    if (this.newProjectButton.isDisplayed()) {
      this.newProjectButton.click();
    }
    //this.ideConsole.waitForDisplayed(50000);
  }

  manageAccountSelectPopUp(){
    if (this.accountFieldToSelect.isExisting()){
      this.accountFieldToSelect.click();
      this.accountSelectButton.click();
    }
  }
    // var iFrame = "//*[@id='rstudio']";
    // iFrame.waitForExist(30000)
    // browser.click(iFrame);







  validateProjectPageOpened(){
    // wait for the account pop up in case we need to select an account
    //this.accountSelectPopUp.waitForDisplayed(5000);
    browser.pause(5000)
    // and if it does show up,
    // select the first account listed - this could be expanded to
    // look for a specific account later
    if (this.accountSelectPopUp.isExisting()) {
      if (this.accountFieldToSelect.isExisting()) {
        this.manageAccountSelectPopUp();
      }
    }
    else {
      // Make sure we got logged in, if this passes we're good.
      browser.waitUntil( () => {
        return browser.getUrl().indexOf('/projects') > -1;
      }, 5000);

    }
  }
}

export default new ProjectPage();
