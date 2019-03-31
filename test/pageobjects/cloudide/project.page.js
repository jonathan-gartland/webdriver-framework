import Page from "../page";
import assert from "assert";
const selectors = require("../../selectors/ide.json");
/**
 Stub code, again mostly copied from https://webdriver.io/docs/pageobjects.html
 using as base pattern for rstudio.cloud interactions

 */
class ProjectPage extends Page {

  get spaceNavToggler() { return $(selectors.cloudIdeCss.projectPage.spaceNavToggler); }
  // similar to above
  get yourProjects() { return $(selectors.cloudIdeCss.projectPage.yourProjects); }
  get newProjectButton() { return $(selectors.cloudIdeCss.projectPage.newProjectButton); }
  get existingProjectLink() { return $(selectors.cloudIdeCss.projectPage.existingProject); }

  get accountSelectPopUp() { return $(selectors.cloudIdeCss.accountPopUp.modalDialog); }
  get accountFieldToSelect() { return $(selectors.cloudIdeCss.accountPopUp.accountFromList); }
  get accountSelectButton() { return $(selectors.cloudIdeCss.accountPopUp.submitButton); }
  get systemStatus() { return $(selectors.cloudIdeCss.projectPage.systemStatus); }
  get contentIFrame() { return $(selectors.cloudIdeCss.projectPage.ideContentIFrame); }
  get rstudioConsolePrompt() { return $(selectors.cloudIdeCss.projectPage.rstudioConsolePrompt); }


  deleteProject() {

    // 2 ways via GUI

  }

  openExistingProject() {
    browser.pause(5000);  // in case the workspace is still rendering elements
    this.existingProjectLink.waitForDisplayed(10000)  // in case it takes a little longer
    if (this.existingProjectLink.isExisting()) {
      this.existingProjectLink.click();
    }
  }

  openNewProject() {
    if (this.newProjectButton.isDisplayed()) {
      this.newProjectButton.click();
    }
  }

  validateProjectOpened() {
    browser.pause(10000); // need to let the project open, sometimes it's slow
    browser.switchToFrame(this.contentIFrame);
    // get the console prompt widget, if it is visible and existing,
    // the project has opened.
    assert(this.rstudioConsolePrompt.isExisting());

  }

  manageAccountSelectPopUp(){
    // a user can have more than one account. sometimes, the user
    // must select an account to open the workspace. this manages
    // that case.
    if (this.accountFieldToSelect.isExisting()){
      this.accountFieldToSelect.click();
      this.accountSelectButton.click();
    }
  }

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
