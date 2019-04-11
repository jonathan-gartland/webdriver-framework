import Page from "../page";
import assert from "assert";
const selectors = require("../../selectors/ide.json");
/**
 Stub code, again mostly copied from https://webdriver.io/docs/pageobjects.html
 using as base pattern for rstudio.cloud interactions

 */
class ProjectPage extends Page {

  get spaceHeaderTitle() { return $(selectors.cloudIdeCss.projectPage.spaceHeaderTitle); }
  get spaceNavToggler() { return $(selectors.cloudIdeCss.projectPage.spaceNavToggler); }
  get existingSpaceToOpen() { return $(selectors.cloudIdeCss.projectPage.firstSpaceInListNotActive); }
  get newSpaceLink() { return $(selectors.cloudIdeCss.projectPage.newSpace); }
  get newSpaceModal() { return $(selectors.cloudIdeCss.projectPage.newSpaceModalDialog); }
  get newSpaceModalNameField() { return $(selectors.cloudIdeCss.projectPage.newSpaceName); }
  get newSpaceModalDetailField() { return $(selectors.cloudIdeCss.projectPage.newSpaceInfo); }
  get createSpaceButton() { return $(selectors.cloudIdeCss.projectPage.createNewSpaceButton); }
  get deleteSpaceWidget() { return $(selectors.cloudIdeCss.projectPage.deleteSpaceActionWidget); }
  get deleteSpaceButton() { return $(selectors.cloudIdeCss.projectPage.deleteSpaceButton); }
  get deleteSpaceModal() {return $(selectors.cloudIdeCss.projectPage.deleteSpaceModal); }
  get deleteSpaceInput() {return $(selectors.cloudIdeCss.projectPage.deleteSpaceInput); }
  get deleteSpaceModalButton() {return $(selectors.cloudIdeCss.projectPage.deleteSpaceModalButton); }
  get yourProjects() { return $(selectors.cloudIdeCss.projectPage.yourProjects); }
  get newProjectButton() { return $(selectors.cloudIdeCss.projectPage.newProjectButton); }
  get existingProjectLink() { return $(selectors.cloudIdeCss.projectPage.existingProject); }
  get deleteProjectButton() { return $(selectors.cloudIdeCss.projectPage.deleteProjectButton); }
  get deleteProjectOKButton() { return $(selectors.cloudIdeCss.projectPage.deleteProjectOKButton); }
  get accountSelectPopUp() { return $(selectors.cloudIdeCss.accountPopUp.modalDialog); }
  get accountFieldToSelect() { return $(selectors.cloudIdeCss.accountPopUp.accountFromList); }
  get accountSelectButton() { return $(selectors.cloudIdeCss.accountPopUp.submitButton); }
  get systemStatus() { return $(selectors.cloudIdeCss.projectPage.systemStatus); }
  get contentIFrame() { return $(selectors.cloudIdeCss.projectPage.ideContentIFrame); }
  get rstudioConsolePrompt() { return $(selectors.cloudIdeCss.projectPage.rstudioConsolePrompt); }
  // Learn link page elements
  get guideLink() { return $(selectors.cloudIdeCss.projectPage.guideLink); }
  //get guidePageActiveLink() { return $(selectors.cloudIdeCss.projectPage.guidePageActiveLink); }
  get whatsNewLink() { return $(selectors.cloudIdeCss.projectPage.whatsNew); }
  get whatsNewUnreadLink() { return $(selectors.cloudIdeCss.projectPage.whatsNewUnread); }
  //get whatsNewActiveLink() { return $(selectors.cloudIdeCss.projectPage.whatsNewActiveLink); }
  get primersLink() { return $(selectors.cloudIdeCss.projectPage.primersLink); }
  get datacampCourseLink() { return $(selectors.cloudIdeCss.projectPage.datacampLink); }
  get cheatSheetLink() { return $(selectors.cloudIdeCss.projectPage.cheatSheets); }
  get feedbackLink() { return $(selectors.cloudIdeCss.projectPage.feedbackLink); }
  get termsLink() { return $(selectors.cloudIdeCss.projectPage.termsAndConditions); }


  deleteClosedProject() {
    // 2 ways via GUI
    // this one is only doing it with delete button/link in my projects view
    const projectList = $$(
        '#main > div.band.pushFooter > div > div > div.majorColumn > div:nth-child(2) > div:nth-child(2) > div > div.itemHeader > div.itemTitle > a'
    ).map(function(element){ return element.getAttribute('innerText') });

    if (this.existingProjectLink.isExisting()) {
      if (this.deleteProjectButton.isExisting()) {
        this.deleteProjectButton.click();
        browser.pause(3000);
        if(this.deleteProjectOKButton.isExisting()) {
          this.deleteProjectOKButton.click();
          // how to validate? check for a list of project names
          // before then again here - might work
        }
      }
    }
  }

  deleteOpenProject() {

  }

  openExistingProject() {

    browser.pause(5000);  // in case the workspace is still rendering elements
    this.existingProjectLink.waitForDisplayed(10000); // in case it takes a little longer
    if (this.existingProjectLink.isExisting()) {
      this.existingProjectLink.click();
    }
  }

  openNewProject() {
    if (this.newProjectButton.isDisplayed()) {
      this.newProjectButton.click();
      browser.pause(80000);
    }
    this.validateProjectOpened();
  }
  // open from github ... later

  validateProjectOpened() {

    browser.pause(15000); // need to let the project open, sometimes it's slow
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

  validateSpaceNavIsVisible() {
    assert(this.systemStatus.isExisting());
  }

  openExistingSpace() {
    // opens first space in list when user is in 'My Workspace'
    const currentSpace = this.spaceHeaderTitle.getText();
    if (this.existingSpaceToOpen.isExisting()){
      this.existingSpaceToOpen.click();
    }
    browser.pause(3000);
    const newSpace = this.spaceHeaderTitle.getText();
    assert(currentSpace !== newSpace);
  }


  createNewSpace(newSpaceName) {
    // todo : need to make sure space name is unique

    if (this.newSpaceLink.isExisting()) {
      this.newSpaceLink.click();
      this.newSpaceModal.waitForDisplayed(5000);
      if (this.newSpaceModalNameField.isExisting()) {
        this.newSpaceModalNameField.setValue(newSpaceName);
        browser.pause(1000);
        this.createSpaceButton.click();
      }
      browser.pause(2000);
      assert(this.spaceHeaderTitle.getText() === newSpaceName)

      // hack to keep space from piling up with dupes. I will delete
      // for now, but there should be logic to open an existing recent space
      // to be deleted
      if(this.deleteSpaceWidget.isExisting()) {
        this.deleteSpaceWidget.click();
        browser.pause(1000);
        this.deleteSpaceButton.click();
        this.deleteSpaceModal.waitForDisplayed(3000);
        if (this.deleteSpaceInput.isExisting()) {
          var deleteString = 'Delete ' + this.spaceHeaderTitle.getText();
          this.deleteSpaceInput.setValue(deleteString);
          browser.pause(1000);
          this.deleteSpaceModalButton.click();
          browser.pause(5000);
          this.spaceHeaderTitle.waitForDisplayed(5000);
        }
      }
      // this.deleteSpace(newSpaceName);
      // browser.debug();
    }
  }

  deleteSpace(deleteSpaceName) {
    // hack for this right now to avoid a lot of logic to look for the
    // existing project - just create a space to delete here
    this.createNewSpace(deleteSpaceName);
    browser.pause(3000);
    if(this.deleteSpaceWidget.isExisting()) {
      this.deleteSpaceWidget.click();
      browser.pause(1000);
      this.deleteSpaceButton.click();
      this.deleteSpaceModal.waitForDisplayed(3000);
      if(this.deleteSpaceInput.isExisting()) {
        var deleteSpaceString = 'Delete ' + this.spaceHeaderTitle.getText();
        this.deleteSpaceInput.setValue(deleteSpaceString);
        browser.pause(1000);
        this.deleteSpaceModalButton.click();
        browser.pause(5000);
        this.spaceHeaderTitle.waitForDisplayed(5000);
      }
    }
    // validate - back in My Workspace
    assert(this.spaceHeaderTitle.getText() === "Your Workspace");
  }

  validateLinkWorks(inLink, inUrlSnippet) {
    inLink.waitForExist(10000);
    inLink.click();
    browser.waitUntil( () => {
      return browser.getUrl().indexOf(inUrlSnippet) > -1;
    }, 10000);
  }
}

export default new ProjectPage();
