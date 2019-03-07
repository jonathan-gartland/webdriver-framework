
/**
 Basic Page object for UI E2E testing.
 code stub copied from https://webdriver.io/docs/pageobjects.html
 placeholder while i build out infrastructure.

 * */


export default class Page {

  open(path) {
    browser.url(path);
  }

  // onPage(urlSnippet) {
  //   return browser.getUrl().indexOf(urlSnippet) > -1;
  // }
  // todo : import selectors here and set up the json oject so each component can easily
  // access the selectors
  // todo : any other basic functionality? maybe not.
}
