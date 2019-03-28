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

  get modalDialogDiv() { return $("#main > div:nth-child(4) > div"); }

  get accountSelectPopUp() { return $(selectors.cloudIde.accountPopUp.modalDialog); }

  get accountFieldToSelect() { return $(selectors.cloudIde.accountPopUp.accountFromList); }

  get accountSelectButton() { return $(selectors.cloudIde.accountPopUp.submitButton); }

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




  get systemStatus() { return $(selectors.cloudIde.projectPage.systemStatus); }


  manageAccountSelectPopUp(){
    if (this.accountFieldToSelect.isExisting()){
      this.accountFieldToSelect.click();
      this.accountSelectButton.click();
    }
  }

  validateProjectPageOpened(){

    browser.debug();

    if (this.modalDialogDiv.isExisting()){
      this.accountSelectPopUp.waitForExist(10000);
    }

    if (this.accountSelectPopUp.isExisting()) {
      this.manageAccountPopUp();
    }

    // Make sure we got logged in, if this passes we're good.
    browser.waitUntil(function() {
      return browser.getUrl().indexOf('/projects') > -1;
    }, 30000);

  }

}

export default new ProjectPage();
