
/**
 Basic Page object for UI E2E testing.
 code stub copied from https://webdriver.io/docs/pageobjects.html
 placeholder while i build out infrastructure.

 * */
export default class Page {
  // constructor() {
  //   this.title = 'My Page';
  // }

  open(path) {
    browser.url(path);
  }

  // todo : any other basic functionality? maybe not.
}
