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
  get spaceNavToggler() { return $(selectors.cloudIdeCss.projectPage.spaceNavToggler); }
  // similar to above
  get yourProjects() { return $(selectors.cloudIdeCss.projectPage.yourProjects); }
  get newProjectButton() { return $(selectors.cloudIdeCss.projectPage.newProjectButton); }
  get existingProjectLink() { return $(selectors.cloudIdeCss.projectPage.existingProject); }

  get accountSelectPopUp() { return $(selectors.cloudIdeCss.accountPopUp.modalDialog); }
  get accountFieldToSelect() { return $(selectors.cloudIdeCss.accountPopUp.accountFromList); }
  get accountSelectButton() { return $(selectors.cloudIdeCss.accountPopUp.submitButton); }
  get systemStatus() { return $(selectors.cloudIdeCss.projectPage.systemStatus); }

  get iFrame() { return $("#rstudio"); }
  get contentIFrame() { return $("#contentIFrame"); }
  get iFrameRStudioElement() { return $('#rstudio_console_output'); }
  get rstudioConsolePrompt() { return $('#rstudio_shell_widget > div > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td:nth-child(1) > div'); }

  // get ideConsole() { return $(selectors.cloudIdeCss.projectPage.rstudioConsole); }
  // message while waiting: #contentContainer > div > div

  // content ~= project page object in this case, opening the project
  // will be an ide/iframe page object

  deleteProject() {

    // 2 ways via GUI

  }

  openExistingProject() {
    //browser.debug();
    browser.pause(5000);
    this.existingProjectLink.waitForDisplayed(10000)
    if (this.existingProjectLink.isExisting()) {
      this.existingProjectLink.click();
    }
    //browser.pause(5000);
    browser.pause(10000);
    browser.switchToFrame(this.contentIFrame);
    //$("#rstudio_console_input > textarea").setValue("test text");
    // get the console widget, if it is visible and existing,
    // the project has opened.
    assert(this.rstudioConsolePrompt.isExisting());

    //browser.debug();
  }

  openNewProject() {
    if (this.newProjectButton.isDisplayed()) {
      this.newProjectButton.click();

    }



    //var iFrame = "//*[@id='contentIFrame']"; //#contentIFrame

    //browser.waitForExist(iFrame);
    //var my_frame = $(iFrame).value;
    //browser.frame(my_frame);
    //this.ideConsole.waitForDisplayed(50000);


  }

  validateProjectOpened() {

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
