
/**
 Basic Page object for UI E2E testing.
 code stub copied from https://webdriver.io/docs/pageobjects.html
 placeholder while i build out infrastructure.

 * */


export default class Page {

  open(path) {
    browser.url(path);
  }

  getSelectors(){
    return require('../../selectors/ide.json');
  }
  // todo : any other basic functionality? maybe not.
}
