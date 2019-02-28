import Page from '../page';

/**
 Stub code, again mostly copied from https://webdriver.io/docs/pageobjects.html
 using as base pattern for rstudio.cloud interactions

 */
class SpacePage extends Page {

  //
  //get username() { return $('#username'); }
  //get password() { return $('#password'); }
  //get submitBtn() { return $('form button[type="submit"]'); }
  //get flash() { return $('#flash'); }
  //get headerLinks() { return $$('#header a'); }

  open() {
    //super.open('login');
  }

  submit() {
    //this.submitBtn.click();
  }

}

export default new SpacePage();
