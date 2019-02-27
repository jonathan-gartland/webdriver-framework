import Page from '../page';
var assert = require('assert');
/**
 Stub code, again mostly copied from https://webdriver.io/docs/pageobjects.html
 using as base pattern for rstudio.cloud interactions

 */
class ProjectPage extends Page {

  // right nav elements, space menu, ....
  // might get broken out into it's own object - try to think nimbly
  // this probably the space 'page' at the end of the day
  get rightNavSpaceMenu() { return $('#navPanel > div.panelContents > div.navMenu > div.spaceMenu.mobileSubsOnly > div.menu'); }

  // similar to above
  get topBandElement() { return $('#rStudioHeader > div.band > div'); }

  // content ~= project page object in this case, opening the project
  // will be an ide/iframe page object
  get contentWithOptionPanel() { return $('#main > div.band.pushFooter > div > div'); }
  get systemStatus() { return $('#navPanel > div.panelContents > div.navMenu > div:nth-child(5) > div > a.menuItem.status'); }



  validateProjectPageOpened(){
    // Make sure we got logged in, if this passes we're good.
    this.topBandElement.waitForDisplayed(40000);
    assert(browser.getUrl().indexOf('/projects') > -1);

  }

}

export default new ProjectPage();
